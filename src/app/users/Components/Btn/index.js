import React from 'react'
import Styles from './style.module.scss'

export default function index(props) {


  return (
    <>
      {props.hasIcon ?

        <button className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          {props.title}
          <a>{props.children}</a>
        </button >

        :

        <button className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          {props.title}
        </button >
      }
    </>



  )
}
