
import { useState } from 'react';
import styles from './styles.module.scss'
import Input from '../components/Input/index'
import Btn from '../components/Btn/index'
import Http from '../../../../Axios/Https';
import { parseCookies, generateToken } from '../api/auth';

export default function Home() {
  const https = new Http()


  const [formData, setFormData] = useState({});
  const [loginDone,setLoginDone] =useState({})

  // if(loginDone.status === 200){
//  generateToken({ userToken: `${loginDone.token}` }); 
  //   props.res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/;`);
  // }

  

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    https.post(`admin/login?email=${formData.email}&password=${formData.password}`)
      .then(
        Response => {
          setLoginDone(Response.data)
        },
        {
         
        }
      ).catch(error => {
        console.log(error)
      })
  }



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 background">
      <div className={styles.mainLogin}>
        <div className={styles.header}>
          <div className={styles.logo}>
            Logo
          </div>
          <div className={styles.headerTitle}>Log in to your account</div>
          <div className={styles.headerDes}>
            Welcome back! Please enter your details.
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <div className={styles.inputs}>
              <Input title="Email" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange} />
              <Input title="passord" placeholder="Enter your password" name='password' value={formData.password} onChange={handleChange}/>
            </div>
            <div className={styles.passwordDetail}>
              <div className={styles.rememberPass}>
                <input type={'checkbox'} />
                <div>
                  Remember for 30 days
                </div>
              </div>
            </div>
            <Btn submitType="submit" type="primary" title="login" link="/dashboard" />
          </div>
        </form>
      </div>

    </main >
  )
}