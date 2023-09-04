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
  const [pageLoading , setPageLoading] = useState([])
  console.log(pageLoading)
  const https = new Https();

  useEffect(() => {
    https.get(`user/post/${params.id}/show`).then(Response => {
      setcontent(Response.data.data),
      setPageLoading(Response.data.message)
    }).catch(error => {
      console.log(error)
    })
  }, [])



  return (
    <>
      {

          pageLoading.message === "Post fetched" ?

          :
          <div>wating...</div>


      }
    </>
  )
}
