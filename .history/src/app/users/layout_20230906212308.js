'use client'
import '../globals.css'
import { useState} from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'
import Cookies from 'universal-cookie'


export default function RootLayout({ children }) {

  const cookies = new Cookies()

  const theme = cookies.get('theme')
  const [currentTheme, setTheme] = useState(theme)
  
  const [isLight, setIsLight] = useState(currentTheme)
  
  
  cookies.set('theme', `${currentTheme === 'light'}`, {
    path: '/',
    expires: new Date(Date.now() + 3600000)
  })
  
  console.log(isLight)





  return (
    <ThemeContext.Provider value={isLight} >
      <html lang="en">
        <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
          <Nav isLight={isLight} setIsLight={setIsLight} />
          {/* <div onClick={setLightCookie()}>light</div>
          <div onClick={setDarkCookie()}>dark</div> */}
          <div className={styles.containerPadding}>
            {children}

            {/* <Detail/> */}
          </div>
        </body>
      </html>
    </ThemeContext.Provider>
  )
}
