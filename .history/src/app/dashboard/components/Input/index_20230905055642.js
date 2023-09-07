"use client"

import React ,{useState} from 'react'
import Styles from './style.module.scss'


export default function Index(props ) {
  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
        {props.inputValue}
        {console.log(props.inputValue)}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder} value={props.inputValue} onChange={(e)=>props.setInputValue(e.target.value)} />
      </div>
    </div>
  )
}

export default Component = ({setInputValue}) => {
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
        {props.inputValue}
        {console.log(props.inputValue)}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder} value={props.inputValue} onChange={(e)=>props.setInputValue(e.target.value)} />
      </div>
    </div>
}