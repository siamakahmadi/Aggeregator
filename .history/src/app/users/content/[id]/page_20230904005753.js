'use client'
import { useContext, useState, useEffect } from 'react'
import styles from '../style.module.scss'
import Btn from '../../Components/Btn/index'
import CardLayout from '../../Components/HomeListLayout/index'
import Card from '../../Components/Card/index'
import ThemeContext from '../../Api/context/ThemeContext'

import Https from "../../Api/Https";

// Icon List
import RightFlash from '../../Assets/svg/RighFlash'
import Tag from '../../Assets/svg/tag'
import Version from '../../Assets/svg/version'
import Figma from '../../Assets/svg/figma'


export default function Page({ params }) {

  const theme = useContext(ThemeContext)
  const [content, setcontent] = useState([])
  console.log(content.data);
  const https = new Https();

  useEffect(() => {
    https.get(`user/post/${params.id}/show`).then(Response => {
      setcontent(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const contentData = content.message === "Post fetched" ?
    <>
      <div>hello</div>
      {content.data()}
    </> : <div>wating...</div>



  return (
    <>
    {content.message === "Post fetched" ?
    <>
      {content.data.map(item => (
        <Link href={`users/content/${item.id}`}>
          <Card key={item.id} title={item.title} src="" />
        </Link>
      ))}
    </> : <div>wating...</div>}
     
    </>
  )
}