import React from 'react'
import Styles from './style.module.scss'
export default function Index(props) {
    return (
        <div className={props.isLight === 'light' ? Styles.lightHeader : Styles.darkHeader}>
            <div className={Styles.container}>
                <div className={Styles.header}>
                    <div className={Styles.headerTitle}>
                        <p>Curated web design inspiration catalog</p>
                    </div>
                    <div className={Styles.headerdiscription}>
                        <p>Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc </p>
                    </div>{props.display &&
                    }
                    
                    </div>
                </div>
            </div>
        </div>


    )
}
