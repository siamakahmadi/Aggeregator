'use client'

import { createContext } from "react";

const ThemeContext = createContext('light')


export default ThemeContext;


const cookies = new Cookies()


import Cookies from 'universal-cookie'
cookies.set('theme', `${ThemeContext}`, {
  path: '/',
  expires: new Date(Date.now() + 3600000) 
})
