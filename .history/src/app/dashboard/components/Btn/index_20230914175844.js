import React from 'react'
import Styles from './style.module.scss'

export default function Index(props) {


  return (
    <>
      {props.hasIcon ?

        <button href={props.link} type={props.submitType} className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          <a >{props.children}</a>
          {props.title}
        </button >


        :

        <button href={props.link} type={props.submitType} className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          <a href={props.link}>
            {props.title}
          </a>
        </button >
      }
    </>



  )
}