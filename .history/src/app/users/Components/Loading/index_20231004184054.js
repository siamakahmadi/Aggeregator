import React from 'react'
import style from './style.module.scss'
export default function index(props) {
  return (
    <div className={style.background}>
        <div className={style.container}>
            <span className={style.spinner}>
            </div>
            <div className={style.title}>
                {props.title}
            </div>
        </div>
    </div>
  )
}
