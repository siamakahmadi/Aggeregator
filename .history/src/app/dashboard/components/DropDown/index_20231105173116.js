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
        <ul className={Style.itemList}>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
    </div>
    </>
  )
}
