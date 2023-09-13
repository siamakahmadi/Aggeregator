import styles from './styles.module.scss'
import Input from '../components/Input/index'
import Btn from '../components/Btn/index'
export default function Home() {
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
            <Input title="Email" placeholder="Enter your email" />
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
