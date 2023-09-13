'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(true)

  return (
    <>
      {isLoggin ? router.push('/dashboard/login') : router.push('/dashboard/posts')}

    </>
  )
}
