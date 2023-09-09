import React from 'react'

export default function page({ params }) {
  return (
    <div>
        <div>{ params.type }</div>
        <div>{ params.id }</div>
    </div>
  )
}
