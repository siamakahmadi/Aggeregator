import React from 'react'
import Styles from './tableItem.module.scss'
import StatusLabel from '../components'
export default function tableItem(props) {
    return (
        <div className={Styles.tableItems}>
            <div className={Styles.profile}>
                <div className={Styles.profileImage}>
                    <img />
                </div>
                <div className={Styles.userName}>{props.name}</div>
            </div>
            <div className={Styles.email}>siamakahmadi@gmail.com</div>
            <div className={Styles.date}>01/21/23</div>
            <div>
                <StatusLabel title="Free" />
            </div>
            <div className={Styles.pointer}>
                Suspend
            </div>
            <div className={Styles.pointer}>
                Detail
            </div>
        </div>
    )
}
