import React from 'react'
import Styles from './style.module.scss'

export default function index(props) {

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        {props.title}
        <div className={Styles.description}>
          {props.description}
        </div>
      </div>
      <div className={Styles.provider}>
        {props.children}
      </div>
    </div>
  )
}
