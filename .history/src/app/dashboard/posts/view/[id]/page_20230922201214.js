import React from 'react'
import { useRouter } from 'next/navigation'

export default function page({params}) {
  const router = useRouter()

  return (
    <div>{params.id}</div>
  )
}
