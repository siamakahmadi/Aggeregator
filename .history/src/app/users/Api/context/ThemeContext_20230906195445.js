'use client'

import { createContext } from "react";

const ThemeContext = createContext('light')

import Cookies from 'universal-cookie'

const cookies = new Cookies()

cookies.set('name', 'value', {
  path: '/',
  expires: new Date(Date.now() + 3600000) 
})

export default ThemeContext;