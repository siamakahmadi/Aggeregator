'use client'
import '../globals.css'
import { useState, useEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie'


export default function RootLayout({ children }) {

  const cookies = new Cookies()

  cookies.set('theme', 'light', {
    path: '/',
    expires: new Date(Date.now() + 3600000)
  })

  const theme = cookies.get('theme')

  const [isLight, setIsLight] = useState(theme)

  function setLightCookie=> {
    cookies.set('theme', 'light', {
      path: '/',
      expires: new Date(Date.now() + 3600000)
    })
  }

  function setDarkCookie() {
    cookies.set('theme', 'dark', {
      path: '/',
      expires: new Date(Date.now() + 3600000)
    })
  }

  return (
    <ThemeContext.Provider value={isLight} >
      <html lang="en">
        <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
          <Nav isLight={isLight} setIsLight={setIsLight} />
          <div onClick={setLightCookie()}>light</div>
          <div onClick={setDarkCookie()}>dark</div>
          <div className={styles.containerPadding}>
            {children}

            {/* <Detail/> */}
          </div>
        </body>
      </html>
    </ThemeContext.Provider>
  )
}
