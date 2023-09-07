'use client'

import { createContext } from "react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const ThemeContext = createContext('light')



export default ThemeContext;