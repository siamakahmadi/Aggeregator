import React from 'react'
import styles from './style.module.scss'
export default function Indes(props) {
    return (
        <div className={styles.body}>
            <div className={styles.inputTitle}>
                {props.Title}
            </div>
            <div className={styles.input}>
                <textarea name={props.name} value={props.value} onChange={props.onChange} placeholder={props.PlaceHolder} > </textarea>
            </div>
            <div className={styles.inputDescription}>
                {props.Description}
            </div>
        </div>
    )
}
