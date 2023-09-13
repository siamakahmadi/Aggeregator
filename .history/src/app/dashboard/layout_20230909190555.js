// import './globals.css'
'use client'
import styles from './assets/main.module.scss'
import Nav from './components/nav/index'

import { useState } from "react"
import { useRouter } from 'next/navigation'




export default function RootLayout({ children }) {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(true)
  return (
    <>
      {isLoggin ? 
      router.push('dashboard/login') : router.push('dashboard/index')}
      
      </>
      )
