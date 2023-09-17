'use client'
import '../globals.css'
import { useState, useLayoutEffect } from "react";
import ThemeContext from "./Api/context/ThemeContext";
import Nav from './Components/Navbar/index'
import styles from './Assets/main.module.scss'


export default function RootLayout({ children }) {

  const [isLight, setIsLight] = useState('')
  useLayoutEffect(() => {
    if(isLight === ''){
      setIsLight('light')
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
        {
          isLight ?
          
        }
        
      </html>
    </ThemeContext.Provider>
  )
}
