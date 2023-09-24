import React from 'react'
import Style from './style.module.scss'

export default function Indes() {
  return (
    <div className={Style.checkBox}>
        <input className={Style.check}  placeholder={props.placeholder} name={props.name} value={props.value} onChange={props.onChange}  type='checkbox' />
        <div className={Style.text}>
        Select as Featured post
        </div>
    </div>
  )
}
