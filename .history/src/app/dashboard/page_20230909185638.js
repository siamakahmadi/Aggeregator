'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'

import { useState } from "react"
import { useRouter } from 'next/navigation'




export default function RootLayout({ children }) {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(true)
  return (
    <html lang="en">
      <body className={styles.mainBackground}>
        <Nav />
        <div className={styles.containerPadding}>
          <>
            {isLoggin ? router.replace('dash/login'):children}
          </>
        </div>
      </body>
    </html>
  )
}
