"use client"
import React from 'react'
import Styles from './style.module.scss'


export default function Index(props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.value}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder}  value={props.value} />
      </div>
    </div>
  )
}
