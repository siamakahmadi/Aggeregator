'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'


export default function RootLayout({ children }) {
  
  const setLightStorage = window.localStorage.setItem('isLight?','light');

  useLayoutEffect(() => {
    const getLightStorage = window.localStorage.getItem('isLight?');
    setIsLight(getLightStorage)
  }, [])

  const [isLight, setIsLight] = useState(null)
  console.log(isLight)
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
