'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import Https from '../../../../Axios/Https'

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
