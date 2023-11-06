'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter()
  router.push('/users/all') 

  useEffect(() => {
    router.push('/users/all') 
  })
}
