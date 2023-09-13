'use client'
import { Children, useState } from "react"
import { useRouter } from 'next/navigation'

export default function Home({...Children}) {

  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(true)

  return (
    <>
      {isLoggin ? router.push('/dashboard/login') :Children router.push('/dashboard/posts')}
      {Children}
    </>
  )
}
