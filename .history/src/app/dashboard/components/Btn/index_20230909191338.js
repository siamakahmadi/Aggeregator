import Link from 'next/link'
import React from 'react'
import Styles from './style.module.scss'

export default function Index(props) {


  return (
    <>
      {props.hasIcon ?

        <button className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          <Link href={props.link}>{props.children}</Link>
          {props.title}
        </button >


        :

        <button className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          <a href={props.link}>
            {props.title}
          </a>
        </button >
      }
    </>



  )
}
