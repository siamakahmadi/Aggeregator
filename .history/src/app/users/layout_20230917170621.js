'use client'
import '../globals.css'
import { useState, useContext, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import IsLoggin from "./Api/context/UserContext"
import styles from './Assets/main.module.scss'
import { useSafeLayoutEffect } from '@clerk/shared';


export default function RootLayout({ children }) {


  const [isLight, setIsLight] = useState('')
  const [userData, setUserData] = useState('')

  useSafeLayoutEffect(()=>{
    cookie.set('userLogin', {
      isLoggin: `false`,
      userToken: null,
      userEmail: null,
      userId: `${Response.data.data.user_info.id}`
    }, {
      path: '/',
      expires: new Date(Date.now() + 3600000)
    })
  })

  useLayoutEffect(() => {
    const storedData = window.localStorage.getItem('isLight?');
    setIsLight(storedData);
  }, []);

  useLayoutEffect(() => {
    window.localStorage.setItem('isLight?', isLight);
  }, [isLight]);


  return (
    <ThemeContext.Provider value={isLight} >
      <IsLoggin.Provider value={userData}>
        <html lang="en">
          <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
            <Nav isLight={isLight} setIsLight={setIsLight} userData={userData} setUserData={setUserData}/>
            <div className={styles.containerPadding}>
              {children}
            </div>
          </body>
        </html>
      </IsLoggin.Provider>
    </ThemeContext.Provider>
  )
}
