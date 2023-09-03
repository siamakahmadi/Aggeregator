'use client'
import { useState,useEffect } from 'react'
import A from '../../../../Axios/Https'

export default function page() {
    const [posts, setPosts] = useState([])
    const https = new Https();
    useEffect(() => {
      https.get<Setting[]>('admin/setting').then(Response => {
        setPosts(Response.data)
      }).catch(error => {
        console.log(error)
      })
    },[])
  
  return (
    <div>Setting</div>
  )
}