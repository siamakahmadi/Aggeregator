import Style from './style.module.scss'
import React from 'react'

export default function index() {
  return (
    <div className={Style.inputContainer}>
      <div className={Style.label}>label</div>
      <div>selected</div>
    </div>
    
  )
}
