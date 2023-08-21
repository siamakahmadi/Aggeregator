import React from 'react'
import style from './style.module.scss'
export default function index(props) {
  return (
    <div className={style.body}>
        <div className={props.type === 'draft' ? style.draftStatus :style.successStatus}></div>
        <div className={style.text}>
            Draft
        </div>
    </div>
  )
}
