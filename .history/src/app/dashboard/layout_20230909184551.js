// import './globals.css'
'use client'
import styles from './assets/main.module.scss'
import { Inter } from 'next/font/google'
import Nav from './components/nav/index'

import {useState } from "react"
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Aggeregator Admin Panel',
//   description: 'This is the aggeregator Platform Dashboard',
// }


export default function RootLayout({ children }) {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(true)
  return (
    <html lang="en">
      <body className={styles.mainBackground}>
        <Provider>
          <Nav />
          <div className={styles.containerPadding}>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
