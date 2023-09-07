'use client'

import { createContext } from "react";
import Cookies from 'universal-cookie'

const ThemeContext = createContext('light')


export default ThemeContext;




const cookies = new Cookies()
cookies.set('theme','light', {
  path: '/',
  expires: new Date(Date.now() + 3600000) 
})
const theme = cookies.get('theme')

console.log(theme)