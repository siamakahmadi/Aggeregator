import Style from './style.module.scss'
import React from 'react'

export default function index() {
  return (
    <div>
    <div className={Style.inputContainer}>
      <div className={Style.label}>label</div>
      <div className={Style.selected}>selected</div>
    </div>
    <div className={Style.menu}>
        <ul className={Style.itemList}>
          <li className={Style.item}>item1</li>
          <li className={Style.item}>item2</li>
          <li className={Style.item}>item3</li>
        </ul>
    </div>
    </div>
  )
}
