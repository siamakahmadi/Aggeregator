'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import IsLoggin from "./Api/context/UserContext"
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie';

export default function RootLayout({ children }) {

  const cookie = new Cookies

  const [isLight, setIsLight] = useState('')
  const [userData, setUserData] = useState('')

  useLayoutEffect(()=>{
    if(cookie.get('userLogin')){
      console.log('this is available')
    }else{
      cookie.set('userLogin', {
        isLoggin: false,
        userToken: null,
        userEmail: null,
        userId: null
      }, {
        path: '/',
        expires: new Date(Date.now() + 3600000)
      })
      console.log('now added')
    }
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
        <ThemeContext.Provider>
        <html lang="en">
          <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
            <Nav isLight={isLight} setIsLight={setIsLight} userData={userData} setUserData={setUserData} />
            <div className={styles.containerPadding}>
              {children}
            </div>
          </body>
        </html>
        </ThemeContext.Provider>
      </IsLoggin.Provider>
    </ThemeContext.Provider>
  )
}
