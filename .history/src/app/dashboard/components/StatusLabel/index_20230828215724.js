import React from 'react'
import style from './style.module.scss'
export default function index(props) {
  return (
    <div className={style.body}>
        <div className={props.type === 'Draft' ? style.draftStatus :style.successStatus}></div>
        <div className={style.text}>
            {}
        </div>
    </div>
  )
}
