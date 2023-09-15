import Link from 'next/link'
import React from 'react'
import Styles from './style.module.scss'

export default function Index(props) {


  return (
    <>
      {props.hasIcon ?

        <Link type={props.submitType} className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          <p href={props.link}>{props.children}</p>
          {props.title}
        </Link >


        :

        <button type={props.submitType} className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          <a href={props.link}>
            {props.title}
          </a>
        </button >
      }
    </>



  )
}
