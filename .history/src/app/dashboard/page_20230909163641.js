'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()
  const [isLoggin, setIsLoggin] = useState(false)

  return (
    <>
      {isLoggin ? router.push('/dashboard/login') : <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex'>
          here is dashboadr
        </div>
      </main>}

    </>
  )
}
