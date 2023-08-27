'use client'
import { useState,useEffect } from 'react'
import Https from '../../../../Axios/Https'

export default function page() {
  const Api = new Https();
  const [posts, setPosts] = useState([])
  useEffect(() => {
        Api.get('admin/setting').then(Response => {
        setPosts(Response.data)
      }).catch(error => {
        console.log(error)
      })
    },[])
  
  return (
    <div>{{posts}</div>
  )
}
