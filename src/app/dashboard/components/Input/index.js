import React from 'react'
import Styles from './style.module.scss'

export default function index(props) {

  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder} />
      </div>
    </div>
  )
}
