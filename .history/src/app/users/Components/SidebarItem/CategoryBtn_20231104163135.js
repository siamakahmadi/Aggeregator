import React, { useContext } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'
import HomeIcon from '../../Assets/svg/homeIcon'
import TypeFace from '../../Assets/svg/Typefaces'
export default function Index(props) {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme === 'light' ? Styles.sideBarItemLight : Styles.sideBarItemDark} onClick={props.event}>
      <div className={Styles.icon}>
        {props.currentDropdownItem === '' ? ''}
      </div>
      <div className={Styles.title}><p>{props.title}</p></div>

    </div>
  )
}
