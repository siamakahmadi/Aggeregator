'use client'

import { createContext } from "react";
import Cookies from 'universal-cookie'

const ThemeContext = createContext('light')

const cookies = new Cookies()


cookies.set('isDark?', 'value', {
  path: '/',
  expires: new Date(Date.now() + 3600000) 
})

export default ThemeContext;