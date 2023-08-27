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

      {
      getSettingContent.map((content) => (

        <div key={content.id}>
          <p>
            Applicant Name: <span>{content.name}</span>
          </p>
          <p>
            Websites built: <span>{content.websites}</span>
          </p>
          <p>Applicant location: <span>{content.location}</span>
          </p>
        </div>
      ))
      }
    </div>
  )
}
