'use client'

import { createContext } from "react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ThemeContext = createContext('light')


export default ThemeContext;




cookies.set('theme','light', {
  path: '/',
  expires: new Date(Date.now() + 3600000) 
})
const theme = cookies.get('theme')

console.log(theme)