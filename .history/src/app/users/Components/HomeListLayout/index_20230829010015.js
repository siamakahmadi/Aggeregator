import React from 'react'
import Style from './style.module.scss'

export default function Index(props) {
  return (
    <div className={Style.cardLayout}>
        {props.children}
    </div>
  )
}

