import React, { useContext } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'
import closeIcon from '../../Assets/svg/closeIcon'


export default function Index(props) {
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
                            <closeIcon/>
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
