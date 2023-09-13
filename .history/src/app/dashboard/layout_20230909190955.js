// import './globals.css'
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'
import Login from './'
import { useState } from "react"
import { useRouter } from 'next/navigation'




export default function RootLayout({ children }) {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(false)
  return(
    <>
    {isLoggin ? 
      router.push('dashboard/login') :  
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