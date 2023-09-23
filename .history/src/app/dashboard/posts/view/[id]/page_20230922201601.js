import React from 'react'
import { useRouter } from 'next/navigation'

export default function page({params}) {

  return (
    <div>{params.id}</div>
  )
}
