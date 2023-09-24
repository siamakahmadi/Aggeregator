import React from 'react'
import styles from './style.module.scss'

export default function index(props) {
  return (
    <div className={styles.containerDark}>
        <div className={styles.title}>
            <span>{props.title}</span>
        </div>
        <div className={styles.description}>
            <span>{props.description}</span>
        </div>
    </div>
  )
}
