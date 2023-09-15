// import './globals.css'
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'
import Login from './login/page'
import { useState } from "react"
import Cookies from 'universal-cookie'
import dynamic from 'next/dynamic'
// import { useRouter } from 'next/navigation'




export default function RootLayout({ children }) {

  const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })
  
  const cookies = new Cookies()
  const cookieData = cookies.get('isloggin')
  const [isLoggin, setIsLoggin] = useState(false)
  return (
    <>
      {cookieData ?
        <html lang="en">
          <body className={styles.mainBackground}>
            <Nav />
            <div className={styles.containerPadding}>
              {children}
              <NoSSR/>
            </div>
          </body>
        </html> : <Login /> 
        }
    </>
  )
}