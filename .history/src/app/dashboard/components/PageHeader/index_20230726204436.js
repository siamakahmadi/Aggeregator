import React from 'react'
import styles from './style.module.scss'
export default function indes(props) {
    return (
        <div className={styles.header}>
            <div className={styles.leftSide}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.description}>
                    {props.description}
                </div>
            </div>
            <div className={styles.rightSide}>
                {props.children}
            </div>
        </div>

    )
}
