"use client"

import React, { useState } from 'react'
import Styles from './style.module.scss'

export default function Input(props, { onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
        {props.inputValue}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder} value={value} onChange={setValue(e=>e.target.value)}} />
      </div>
    </div>
  );
}

