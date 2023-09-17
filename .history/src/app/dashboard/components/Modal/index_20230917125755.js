import React from 'react'
import styles from './style.module.scss'
import CloseIcon from '../../assets/svg/closeIcon'

export default function index(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>Add New Stack</div>
          <div className={styles.closeIcon} onClick={() => addStack ? setAddStack(false) : setAddStack(true)}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.body}>
            {props.children}
          
        </div>
      </div>
    </div>
  )
}