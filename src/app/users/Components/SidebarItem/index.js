import React, { useContext } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'
export default function index(props) {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme === 'light' ? Styles.itemLight : Styles.itemDark}>
      <div className={Styles.icon}>
         {props.children}
      </div>
      <div className={Styles.title}><p>{props.title}</p></div>

    </div>
  )
}
