'use client'
import React, { useContext, useEffect, useState } from 'react'
import Styles from './style.module.scss'
import Label from '../Label/index'
import ThemeContext from '../../Api/context/ThemeContext'
import Arrow from '../../Assets/svg/arrow.js'
import Plus from '../../Assets/svg/plus'
import TickIcon from '../../Assets/svg/tick'
import Link from 'next/link'
import Https from '../../Api/Https'

export default function Index(props) {
    const https = new Https()
    const theme = useContext(ThemeContext)
    const [isBookmark, setIsBookmark] = useState(false)

    function setBookmark() {
        https.get('user/bookmark/action/$').then(Response => {
            setPosts(Response.data)
          }).catch(error => {
            console.log(error)
          })
    }

    return (
        <div className={Styles.container} >
            <div key={props.key} className={Styles.cardImage}>
                <img src={props.src} />
                {console.log(props.src)}
                <div className={theme === 'dark' ? Styles.imageToolbarDark : Styles.imageToolbarLight}>
                    <div className={Styles.add}>
                        {!isBookmark ? <div onClick={() => { !isBookmark ? setIsBookmark(true) : setIsBookmark(false) }}> <Plus /></div> : <div className={Styles.isBookmark} onClick={() => setBookmark}> <TickIcon /></div>}
                    </div>
                    <Link className={Styles.open} href={`content/${props.route}`} >
                        <Arrow />
                    </Link>
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
        </div>
    )
}