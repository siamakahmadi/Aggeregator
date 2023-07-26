import React, {useContext, useState } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'


export default function index(props) {
  const [isFocus, isFocusSet] = useState(true)
  const theme = useContext(ThemeContext)
  return (
    <div className={theme==='light' ? Styles.inputContainer :Styles.inputContainerDark}>
      <div className={Styles.inputTitle}>
        {props.title}
      </div>
      <div className={isFocus ? Styles.input : Styles.inputFocus} >
        <input placeholder={props.placeholder} onSelect={() => isFocus ? isFocusSet(false) : isFocusSet(true)} onSelectCapture={() => isFocus ? isFocusSet(false) : isFocusSet(true)} />
      </div>
    </div>
  )
}
