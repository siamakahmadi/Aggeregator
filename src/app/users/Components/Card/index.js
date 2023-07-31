import React, { useContext } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'

export default function index(props) {
    const theme = useContext(ThemeContext)
    return (
        <a href={props.route} className={Styles.container} >
            <div className={Styles.cardImage}>
                <img src={props.src} />
                <div className={theme === 'dark' ? Styles.imageToolbarDark:Styles.imageToolbarLight}>
                    <div className={Styles.add}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9.889H15" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.0013 14.8887V4.88867" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={Styles.open}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.125 5.875L5.875 14.125" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.1238 11.7695V5.87536L8.23047 5.8762" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={Styles.title}>
                <p className={Styles.text} >
                   {theme}
                </p>
            </div>
        </a>
    )
}
