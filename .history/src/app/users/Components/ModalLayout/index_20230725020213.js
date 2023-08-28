import React, { useContext } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'

export default function index(props) {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme === 'light' ? Styles.moadl : Styles.moadlDark}>
            <div className={Styles.modalContainer}>
                <div className={Styles.modalHeader}>
                    <div className={Styles.modalTitle}>
                        <div className={Styles.text}>
                            {props.title}
                        </div>
                    </div>
                    {props.hasIcon
                        ?
                        <div className={Styles.closeIcon} onClick={() => props.isEvent ? props.setIsEvent(false) : props.setIsEvent(true)}>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 7.5L16.5 16.5M7.5 16.5L16.5 7.5" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        :
                        <></>}

                </div>
                <div className={Styles.modalContent}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
