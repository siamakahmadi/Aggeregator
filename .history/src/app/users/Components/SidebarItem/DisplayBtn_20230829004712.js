import React from 'react'
import Styles from './style.module.scss'
import HomeIcon from '../../Assets/svg/homeIcon'
export default function index(props) {
  return (
    <div className={Styles.sideBarItemLight} onClick={props.event}>
      <div className={Styles.title}><p>{props.title}</p></div>
      <div className={Styles.icon}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45833 11.6667V8.45834C8.45833 8.13617 8.19717 7.875 7.875 7.875H6.125C5.80283 7.875 5.54167 8.13617 5.54167 8.45834V11.6667C5.54167 11.9888 5.2805 12.25 4.95833 12.25H2.625C2.14175 12.25 1.75 11.8583 1.75 11.375V6.11032C1.75 5.75141 1.9152 5.41246 2.19792 5.19135L6.28125 1.9977C6.70351 1.66743 7.2965 1.66743 7.71877 1.9977L11.8021 5.19133C12.0848 5.41246 12.25 5.7514 12.25 6.11031V11.375C12.25 11.8583 11.8582 12.25 11.375 12.25H9.04167C8.7195 12.25 8.45833 11.9888 8.45833 11.6667Z" stroke="#1A1A1A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  )
}
