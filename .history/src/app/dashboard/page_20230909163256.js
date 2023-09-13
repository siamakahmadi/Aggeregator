'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isLoggin, setIsLoggin] = useState(true)

  return (
    <>
      {isLoggin ? router.push('/dashboard/login'): }
     
    </>
  )
}
