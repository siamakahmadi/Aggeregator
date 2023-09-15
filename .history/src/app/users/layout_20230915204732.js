'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie'


export default function RootLayout({ children }) {
  const cookies = new Cookies()
  useLayoutEffect(() => {
    const theme = cookies.get('theme')
    setIsLight(theme)
  }, [])

  

  const [isLight, setIsLight] = useState('dark')
  console.log(isLight)
  // cookies.set('theme', 'light', {
  //   path: '/',
  //   expires: new Date(Date.now() + 3600000)
  // })


  return (
    <ThemeContext.Provider value={isLight} >
      <html lang="en">
        <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
          <Nav isLight={isLight} setIsLight={setIsLight} />
          <div className={styles.containerPadding}>
            {children}

            {/* <Detail/> */}
          </div>
        </body>
      </html>
    </ThemeContext.Provider>
  )
}
