import React from 'react'
import styles from './style.module.scss'

export default function index(props) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <span>{props.title}</span>
        </div>
        <div className={styles.description}>
            <span></span>
        </div>
    </div>
  )
}
