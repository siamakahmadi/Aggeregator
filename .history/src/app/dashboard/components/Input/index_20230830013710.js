"use client"
import React, {useState } from 'react'
import Styles from './style.module.scss'


export default function Index(props) {
  const [isFocus, isFocusSet] = useState(true)
  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
      </div>
      <div className={isFocus ? Styles.input} >
        <input placeholder={props.placeholder}  value={props.setAddCategory} />
      </div>
    </div>
  )
}
