"use client"
import React from 'react'
import Styles from './style.module.scss'


export default function Index(props) {

  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.addCategory}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder}  value={props.value}  onChange={()=>setValue()} />
      </div>
    </div>
  )
}
