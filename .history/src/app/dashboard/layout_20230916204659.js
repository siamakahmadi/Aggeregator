
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'
import Login from './login/page'
import { useState, useEffect, useLayoutEffect } from "react"
import Cookies from 'universal-cookie'
import { useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css'
import Http from '../../../Axios/Https'




export default function RootLayout({ children }) {

  const cookies = new Cookies()

  const [isLoggin, setIsLoggin] = useState(true)

  useLayoutEffect(() => {
    const cookieData = cookies.get('isloggin')
    setIsLoggin(cookieData)
  }, [])



  // const [isLight, setIsLight] = useState('')

  // useLayoutEffect(() => {
  //   const storedData = window.localStorage.getItem('isLight?');
  //   setIsLight(storedData);
  // }, []);

  // useLayoutEffect(() => {
  //   window.localStorage.setItem('isLight?', isLight);
  // }, [isLight]);



  return (
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
          {isLoggin ?
            <>
              {children}
            </>
            :
            <>
              <Login />
            </>
          }
        </div>
      </body>
    </html>
  )
}