// import './globals.css'
'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'




export default function RootLayout() {
  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(false)
  return(
    <>
    {/* {isLoggin ? 
      router.push('dashboard/login') : router.push('/index')} */}
    </>
  )}