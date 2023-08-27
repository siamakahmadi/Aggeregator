'use client'
import { useState,useEffect } from 'react'
import Https from '../../../../Axios/Https'

export default function page() {
    const [posts, setPosts] = useState([])
    const Api = new Https();
    useEffect(() => {
        Api.get<Setting[]>('admin/setting').then(Response => {
        setPosts(Response.data)
      }).catch(error => {
        console.log(error)
      })
    },[])
  
  return (
    <div>Setting</div>
  )
}
