'use client'
import '../globals.css'
import { useState, useContext, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import IsLoggin from "./Api/context/UserContext"
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie';
import { cookies } from 'next/dist/client/components/headers';

export default function RootLayout({ children }) {

  new cookies
  const [isLight, setIsLight] = useState('')
  const [userData, setUserData] = useState('')

  useLayoutEffect(()=>{
    cookie.set('userLogin', {
      isLoggin: `false`,
      userToken: null,
      userEmail: null,
      userId: null
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
