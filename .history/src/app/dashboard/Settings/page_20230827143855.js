'use client'
import { useState, useEffect } from 'react'
import Https from '../../../../Axios/Https'

export default function page() {
  const Api = new Https();

  const [getSettingContent, SetSettingContent] = useState([])

  useEffect(() => {
    Api.get('admin/setting').then(Response => {
      SetSettingContent(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div>

      {getSettingContent.map((content) => (
        <div key={}>

        </div>
      ))}
    </div>
  )
}
