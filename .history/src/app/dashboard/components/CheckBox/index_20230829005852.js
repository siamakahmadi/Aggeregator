import React from 'react'
import Style from './style.module.scss'

export default function Indes() {
  return (
    <div className={Style.checkBox}>
        <input className={Style.check} type='checkbox' />
        <div className={Style.text}>
        Select as Featured post
        </div>
    </div>
  )
}
