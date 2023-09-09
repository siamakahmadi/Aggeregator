'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
export default function Home() {
  const router = useRouter()

  useEffect(
    
  )
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-950">
      <div className='text-xl text-white'>
        Welcome To Echo New Project
        <div className="flex mt-10 ">
          <div className="mr-10">
            <a className="text-cyan-500" href="/dashboard">Dashboard</a>
          </div>
          <div className="">
            <a className="text-cyan-500" href="/users/all">Index</a>
          </div>
        </div>
      </div>
    </main>
  )
}
