import React from 'react'
import styles from './style.module.scss'
export default function indes(props) {
    return (
        <div className={styles.body}>
            <div className={styles.inputTitle}>
                {props.Title}
            </div>
            <div className={styles.input}>
                <textarea placeholder={props.PlaceHolder} ></textarea>
            </div>
            <div className={styles.inputDescription}>
                {props.Description}
            </div>
        </div>
    )
}
