import React from 'react'
import Styles from './tableItem.module.scss'
import StatusLabel from '../../components/StatusLabel/index'
import { useRouter } from 'next/router'
export default function tableItem(props) {
    const router = useRouter()
    return (
        <div className={Styles.tableItems}>
            <div className={Styles.profile}>
                <div className={Styles.profileImage}>
                    <img />
                </div>
                <div className={Styles.userName}>{props.name}</div>
            </div>
            <div className={Styles.email}>{props.email}</div>
            <div className={Styles.date}>{props.date}</div>
            <div>
                <StatusLabel type={props.type} title={props.status} />
            </div>
            <div className={Styles.pointer}>
                Suspend
            </div>
            <div className={Styles.pointer} onClick={()=>router.push(${props.link})}>
                Detail
            </div>
        </div>
    )
}