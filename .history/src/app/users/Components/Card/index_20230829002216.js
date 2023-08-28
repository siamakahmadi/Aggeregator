import React, { useContext } from 'react'
import Styles from './style.module.scss'
import Label from '../Label/index'
import ThemeContext from '../../Api/context/ThemeContext'
import Arrow from '../../Assets/svg/arrow.svg'
export default function index(props) {
    const theme = useContext(ThemeContext)
    return (
        <a href={props.route} className={Styles.container} >
            <div className={Styles.cardImage}>
                <img src={props.src} />
                <div className={theme === 'dark' ? Styles.imageToolbarDark : Styles.imageToolbarLight}>
                    <div className={Styles.add}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9.889H15" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.0013 14.8887V4.88867" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={Styles.open}>

                    </div>
                </div>
                <div className={Styles.labels}>
                    {props.activeLabel === true  && <Label title={props.labelTitle} />}
                </div>
            </div>
            <div className={Styles.title}>
                <p className={Styles.text} >
                    {props.title}
                </p>
            </div>
        </a>
    )
}
