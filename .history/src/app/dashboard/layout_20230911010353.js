// import './globals.css'
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'
import Login from './login/page'
import { useState } from "react"
import Cookies from 'universal-cookie'
// import { useRouter } from 'next/navigation'




export default function RootLayout({ children }) {
  
  const cookies = new Cookies()
  const cookieData = cookies.get('isloggin')
  const [isLoggin, setIsLoggin] = useState(false)
  setIsLoggin(cookieData)
  
  return (
    <>
      {isLoggin?
        <html lang="en">
          <body className={styles.mainBackground}>
            <Nav />
            <div className={styles.containerPadding}>
              {children}
            </div>
          </body>
        </html> : <Login /> 
        }
    </>
  )
}