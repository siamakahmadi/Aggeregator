"use client"

import React ,{useState} from 'react'
import Styles from './style.module.scss'


export default function Index(props) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {inputValue}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder}  value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      </div>
    </div>
  )
}
