'use client'
import '../globals.css'
import { useState } from "react";

import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'


export default function RootLayout({ children }) {
  const [isLight, setIsLight] = useState('light')
  return (
    <html lang="en">
      <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
        <ThemeContext.Provider value={isLight}>
          <Nav isLight={isLight} setIsLight={setIsLight} />
          <div className={styles.containerPadding}>
            {children}
          </div>
        </ThemeContext.Provider>
      </body>
    </html>
  )
}
