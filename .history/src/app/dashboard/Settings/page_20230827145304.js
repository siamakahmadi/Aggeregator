'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import Https from '../../../../Axios/Https'

export default function page() {

  const [posts, setPosts] = useState([])

  const A = new Https();

  useEffect(() => {
    https.get('admin/settings').then(Response => {
      setPosts(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])


  return (
    <>
    {posts.map((content)=>{
      <div key={content.id}>
        <div>{content}</div>
      </div>
    })}
    </>
  )
}
