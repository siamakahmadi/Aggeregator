"use client"
import React from 'react'
import Styles from './style.module.scss'


export default function Index(props) {
  const onChange = (e) => {
    const value = e.target.value;
  }
  
  <input onChange={onChange} />
  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.value}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder}  value={props.value} onChange={()=> props.setValue(e.target.value)} />
      </div>
    </div>
  )
}
