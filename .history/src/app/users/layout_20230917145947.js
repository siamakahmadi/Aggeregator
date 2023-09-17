'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'


export default function RootLayout({ children }) {

  const [isLight, setIsLight] = useState('')

  useLayoutEffect(() => {
    if(isLight === null){
     setIsLight
    }else{
      const storedData = window.localStorage.getItem('isLight?');
      setIsLight(storedData);
    }
  }, []);

  useLayoutEffect(() => {
    window.localStorage.setItem('isLight?', isLight);
  }, [isLight]);



  return (
    <ThemeContext.Provider value={isLight} >
      <html lang="en">
        <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
          <Nav isLight={isLight} setIsLight={setIsLight} />
          <div className={styles.containerPadding}>
            {children}
          </div>
        </body>
      </html>
    </ThemeContext.Provider>
  )
}
