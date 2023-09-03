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
      <div className={isFocus ? Styles.input : Styles.inputFocus} >
        <input placeholder={props.placeholder}  onSelectCapture={() => isFocus ? isFocusSet(false) : isFocusSet(true)} />
      </div>
    </div>
  )
}
