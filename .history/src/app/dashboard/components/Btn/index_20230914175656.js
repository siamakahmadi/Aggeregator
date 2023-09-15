import Link from 'next/link'
import React from 'react'
import Styles from './style.module.scss'

export default function Index(props) {


  return (
    <>
      {props.hasIcon ?

          <Link  className={props.type === 'primary' ? Styles.primary : Styles.secondary} type={props.submitType} href={props.link}>{props.children}</Link>
          {props.title}


        :

        <button type={props.submitType} className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          <Link href={props.link}>
            {props.title}
          </Link>
        </button >
      }
    </>



  )
}
