import React, { useContext } from 'react'
import Styles from './style.module.scss'
import Label from '../Label/index'
import ThemeContext from '../../Api/context/ThemeContext'
import Arrow from '../../Assets/svg/arrow.js'
import Plus from '../../'
export default function index(props) {
    const theme = useContext(ThemeContext)
    return (
        <a href={props.route} className={Styles.container} >
            <div className={Styles.cardImage}>
                <img src={props.src} />
                <div className={theme === 'dark' ? Styles.imageToolbarDark : Styles.imageToolbarLight}>
                    <div className={Styles.add}>
                        
                    </div>
                    <div className={Styles.open}>
                        <Arrow/>
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
