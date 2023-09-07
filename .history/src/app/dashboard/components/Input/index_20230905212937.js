"use client"

import React, { useState } from 'react'
import Styles from './style.module.scss'


export default function Index(props, setInputValue, inputValue) {
  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
        {props.inputValue}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </div>
    </div>
  )
}



export default function Input({ onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }
  
  return (
    <input 
      value={value}
      onChange={handleChange}
    />

    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
        {props.inputValue}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder}  value={value}
      onChange={handleChange} />
      </div>
    </div>
  );
}
