'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'


export default function RootLayout({ children }) {


  useEffect(()=>{
    const isLight = window.localStorage.getItem('isLight?');
  });
  

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
