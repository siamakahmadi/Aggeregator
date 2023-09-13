// import './globals.css'
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'
import Login from './login/page'
import { useState } from "react"
import { useRouter } from 'next/navigation'




export default function RootLayout({ children }) {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(false)
  return(
    <>
    {isLoggin ? 
      <Login/> :  
      <html lang="en">
      <body className={styles.mainBackground}>
        <Nav />
        <div className={styles.containerPadding}>
          {children}
        </div>
      </body>
    </html> }
    </>
  )}