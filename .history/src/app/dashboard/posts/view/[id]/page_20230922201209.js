import React from 'react'

export default function page({params}) {
  const router = useRouter()

  return (
    <div>{params.id}</div>
  )
}
