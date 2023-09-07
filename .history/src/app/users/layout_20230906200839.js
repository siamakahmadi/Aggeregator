'use client'
import '../globals.css'
import { useState } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'



export default function RootLayout({ children }) {

  const [isLight, setIsLight] = useState('light')
  cookies.set('theme', 'light', {
    path: '/',
    expires: new Date(Date.now() + 3600000)
  })
  const theme = cookies.get('theme')


  return (
    <ThemeContext.Provider value={isLight}>
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
