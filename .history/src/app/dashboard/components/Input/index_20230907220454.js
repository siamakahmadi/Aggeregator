
import React from 'react'
import Styles from './style.module.scss'

export default function Input(props) {
  return (
    <div className={Styles.inputContainer}>
      <div className={Styles.inputTitle}>
        {props.title}
        {props.inputValue}
      </div>
      <div className={Styles.input} >
        <input placeholder={props.placeholder} name={props.name} onChange={}  />
      </div>
    </div>
  );
}

