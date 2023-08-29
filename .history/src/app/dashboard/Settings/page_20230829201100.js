
import React from 'react'

export default function page() {


  

  return (
    <>
      {posts.map((content )=>{
        <div key={content.key}>
          {content}
        </div>
      })}
    </>
  )
}
