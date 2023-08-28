import React from 'react'
import Styles from './style.module.scss'
import HomeIcon from '../../Assets/svg/homeIcon'
export default function Index(props) {
  return (
    <div className={Styles.sideBarItemLight} onClick={props.event}>
      <div className={Styles.title}><p>{props.title}</p></div>
      <div className={Styles.icon}>
        <HomeIcon/>
      </div>
    </div>
  )
}
