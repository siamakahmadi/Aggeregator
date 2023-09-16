'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'


export default function RootLayout({ children }) {


  useLayoutEffect(() => {
    setIsLight(window.localStorage.getItem('isLight?'))
  }, [setIsLight])



  const [isLight,setIsLight] = useState()

  console.log(isLight)  

  return (
    <ThemeContext.Provider value={isLight} >
      <html lang="en">
        <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
          <Nav isLight={isLight}  />
          <div className={styles.containerPadding}>
            {children}
          </div>
        </body>
      </html>
    </ThemeContext.Provider>
  )
}