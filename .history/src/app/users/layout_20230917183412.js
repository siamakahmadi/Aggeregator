'use client'
import '../globals.css'
import { useState, useContext, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import IsLoggin from "./Api/context/UserContext"
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie';

export default function RootLayout({ children }) {


  const [isLight, setIsLight] = useState('')
  const [userData, setUserData] = useState(null)

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
            <Nav isLight={isLight} setIsLight={setIsLight} userData={userData} setUserData={setUserData} />
            <div className={styles.containerPadding}>
              {children}
            </div>
          </body>
        </html>
      </IsLoggin.Provider>
    </ThemeContext.Provider>
  )
}
