import React from 'react'
import Styles from './style.module.scss'

export default function index(props) {


  return (
    <>
      {props.hasIcon ?
        <a href={props.link}>
          <button className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
            {props.title}
            <a>{props.children}</a>
          </button >
        </a>

        :
        <a href={props.link}>
        <button className={props.type === 'primary' ? Styles.primary : Styles.secondary} >
          {props.title}
        </button >
        </a>
      }
    </>



  )
}
