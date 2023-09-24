import React from 'react'
import Style from './style.module.scss'

export default function Indes(props) {
  return (
    <div className={Style.checkBox}>
        <input className={Style.check} name={props.name} value={props.value} onChange={props.onChange}  type='checkbox' />
        <div className={Style.text}>
        {props.title}
        </div>
    </div>
  )
}
