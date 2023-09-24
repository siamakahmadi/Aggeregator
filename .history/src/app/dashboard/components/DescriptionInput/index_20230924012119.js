import React from 'react'
import styles from './style.module.scss'
export default function Indes(props) {
    return (
        <div className={styles.body}>
            <div className={styles.inputTitle}>
                {props.Title}
            </div>
            <div className={styles.input}>
                <input type='text'/>
                <textarea  ></textarea>
            </div>
            <div className={styles.inputDescription}>
                {props.Description}
            </div>
        </div>
    )
}
