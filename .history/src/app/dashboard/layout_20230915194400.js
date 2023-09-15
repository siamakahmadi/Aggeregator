
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'
import Login from './login/page'
import { useState, useEffect } from "react"
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css'


export async function GetStaticProps() {
  const cookies = new Cookies()
  
  const cookieData = cookies.get('isloggin')

  
  return { props: { loginUser } }
}




export default function RootLayout({ children }) {


  const router = useRouter()
  const cookies = new Cookies()
  const cookieData = cookies.get('isloggin')
  const [isLoggin, setIsLoggin] = useState(true)


  return (
    <>
      <html lang="en">
        <body className={styles.mainBackground}>
          <Nav />
          <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />

          <div className={styles.containerPadding}>
            {children}
          </div>
        </body>
      </html>
      {cookieData ?
        <html lang="en">
          <body className={styles.mainBackground}>
            <Nav />
            <div className={styles.containerPadding}>
              {children}
            </div>
          </body>
        </html> 
        : 
        router.push('/dashboard/login')
      }
    </>
  )
}