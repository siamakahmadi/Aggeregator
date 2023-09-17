'use client'
import React, { useContext, useEffect, useState } from 'react'
import Styles from './style.module.scss'
import Label from '../Label/index'
import ThemeContext from '../../Api/context/ThemeContext'
import Arrow from '../../Assets/svg/arrow.js'
import Plus from '../../Assets/svg/plus'
import TickIcon from '../../Assets/svg/tick'
import Link from 'next/link'

export default function Index(props) {
    const theme = useContext(ThemeContext)
    const [isBookmark, setIsBookmark] = useState(false)

    return (
            <Link key={props.key} href={`content/${props.route}`} className={Styles.container} >
                <div className={Styles.cardImage}>
                    <img src={props.src} />
                    {console.log(props.src)}
                    <div className={theme === 'dark' ? Styles.imageToolbarDark : Styles.imageToolbarLight}>
                        <div className={Styles.add}>
                            {!isBookmark ? <div onClick={() => { !isBookmark ? setIsBookmark(true) : setIsBookmark(false) }}> <Plus /></div> : <div onClick={() => { !isBookmark ? setIsBookmark(true) : setIsBookmark(false) }}> <TickIcon /></div>}
                        </div>
                        <div className={Styles.open}>
                            <Arrow />
                        </div>
                    </div>
                    <div className={Styles.labels}>
                        {props.activeLabel === true && <Label title={props.labelTitle} />}
                    </div>
                </div>
                <div className={Styles.title}>
                    <p className={Styles.text} >
                        {props.title}
                    </p>
                </div>
            </Link>
    )
}
