'use client'

import { createContext } from "react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ThemeContext = createContext('light')

const light = 'light'
const dark = 'dark'

cookies.set('theme','light', {
    path: '/',
    expires: new Date(Date.now() + 3600000) 
})

const theme = cookies.get('theme')

console.log(theme)





export default ThemeContext;