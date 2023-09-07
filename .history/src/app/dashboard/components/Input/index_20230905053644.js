"use client"

import React ,{useState} from 'react'
import Styles from './style.module.scss'


export default function Index({inputValue,setInputValue}) {
  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      </div>
    </div>
  )
}
