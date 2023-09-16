'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'


export default function RootLayout({ children }) {


  // useLayoutEffect(() => {
  //   setIsLight(window.localStorage.getItem('isLight?'))
  // },[])
  
  const [name, setName] = useState('');

  const [isLight,setIsLight] = useState()

  useEffect(() => {
    const storedData = window.localStorage.getItem('name');
    setIsLight(storedData); 
  }, []);

  useEffect(() => {
    window.localStorage.setItem('name', isLight);
  }, [isLight]);




  console.log(isLight)  

  return (
    <ThemeContext.Provider value={isLight} >
      <html lang="en">
        <body className={isLight === 'light' ? styles.lightBackground : styles.darkBackground}>
          <Nav isLight={isLight} setIsLight={setIsLight}  />
          <div className={styles.containerPadding}>
            {children}
          </div>
        </body>
      </html>
    </ThemeContext.Provider>
  )
}
