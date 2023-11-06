import Style from './style.module.scss'
import React from 'react'

export default function index() {
  return (
    <>
    <div className={Style.inputContainer}>
      <div className={Style.label}>label</div>
      <div className={Style.selected}>selected</div>
    </div>
    <div className={Style.menu}>
        <ul className={Style.item}>
          
        </ul>
    </div>
    </>
  )
}
