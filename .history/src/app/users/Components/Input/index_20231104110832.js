import React, {useContext, useState } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'


export default function Index(props) {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme==='light' ? Styles.inputContainer :Styles.inputContainerDark}>
      <div className={Styles.inputTitle}>
        {props.title}
      </div>
      <div className={Styles.input}>
        <input type={"text" : "password"} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder}  />
      </div>
    </div>
  )
}
