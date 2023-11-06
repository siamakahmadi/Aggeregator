import { useState } from 'react'
import Style from './style.module.scss'
import React from 'react'
import Arrow from '../../assets/svg/arrow'

export default function index(props) {

  const [isOpen , setIsOpen] = useState(false)
  const itemsmap = props.items.map((item)=>{
    <li className={Style.item}>{item.name}</li>
  })
  const itemsmap = category.data.map((item) => (

  ))
  return (
    <div className={Style.dropDown}>
    <div className={Style.inputContainer}>
      <div className={Style.label}>label</div>
      <div className={Style.selected} onClick={()=>isOpen ? setIsOpen(false):setIsOpen(true)}>
        <div>selected</div>
        <div className={isOpen ? Style.arrowOpen : ''}>
          <Arrow/>
        </div>
      </div>
    </div>
    <div className={isOpen ? Style.menu : Style.menuClsoe } >
        <ul className={Style.itemList}>
         {itemsmap}
        </ul>
    </div>
    </div>
  )
}
