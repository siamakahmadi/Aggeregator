'use client'

import { createContext } from "react";

const ThemeContext = createContext('light')


export default ThemeContext;




import Cookies from 'universal-cookie'
const cookies = new Cookies()
cookies.set('theme', `${ThemeContext}`, {
  path: '/',
  expires: new Date(Date.now() + 3600000) 
})
const theme = cookies.get('theme')