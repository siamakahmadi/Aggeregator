'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie'


export default function RootLayout({ children }) {
  const cookies = new Cookies()
  const isLightStorage = window.localStorage.setItem('isLight?','true');
  useLayoutEffect(() => {
    setIsLight()
  }, [])

  const [isLight, setIsLight] = useState(null)

  return (
    <ThemeContext.Provider value={isLight} >
      <html lang="en">
        {isLight ?
          <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
            <Nav isLight={isLight} setIsLight={setIsLight} />
            <div className={styles.containerPadding}>
              {children}

              {/* <Detail/> */}
            </div>
          </body>

          :
          <body>
            <div>Loading</div>
          </body>
        }

      </html>
    </ThemeContext.Provider>
  )
}
