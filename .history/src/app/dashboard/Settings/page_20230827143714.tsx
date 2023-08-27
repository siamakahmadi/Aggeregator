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
      {getSettingContent.map((content) => {
        return (
          <div key={content.id}>

          </div>
        )
      })}


      {applicants.map((applicant) => (

        <div key={applicant.id}>
          <p>
            Applicant Name: <span>{applicant.name}</span>
          </p>
          <p>
            Websites built: <span>{applicant.websites}</span>
          </p>
          <p>Applicant location: <span>{applicant.location}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
