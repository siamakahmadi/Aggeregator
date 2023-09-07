'use client'
import '../globals.css'
import { useState,useEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie'


export default function RootLayout({ children }) {
  
  const cookies = new Cookies()
  
  const theme = cookies.get('theme')
  
  const [isLight, setIsLight] = useState('dark')



  return (
    <ThemeContext.Provider value={theme} >
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
