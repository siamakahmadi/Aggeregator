import React from 'react'
import Style from './style.module.scss'

export default function index(props) {
  return (
    <div className={Style.cardLayout}>
        {props.children}
    </div>
  )
}

