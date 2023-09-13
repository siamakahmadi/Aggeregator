
import { useState } from 'react';
import styles from './styles.module.scss'
import Input from '../components/Input/index'
import Btn from '../components/Btn/index'
export default function Home() {



  const [formData, setFormData] = useState({});

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    https.post('admin/category', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(
        Response => {
          console.log(Response)
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
        <div className={styles.inputContainer}>
          <div className={styles.inputs}>
          <form onSubmit={handleSubmit}>
            <Input title="Email" placeholder="Enter your email" name='name' value={formData.name} onChange={handleChange}  />
            <Input title="passord" placeholder="Enter your password" />
          </div>
          <div className={styles.passwordDetail}>
            <div className={styles.rememberPass}>
              <input type={'checkbox'} />
              <div>
                Remember for 30 days
              </div>
            </div>
          </div>
          <div>
            <Btn type="primary" title="login" link="/dashboard" />
          </div>
        </div>
      </div>

    </main>
  )
}
