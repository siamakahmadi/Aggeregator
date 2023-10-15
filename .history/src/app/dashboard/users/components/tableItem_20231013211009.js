import React from 'react'
import Styles from './tableItem.module.scss'
import StatusLabel from '../../components/StatusLabel/index'
import Link from 'next/link'
export default function tableItem(props) {
    co
    function handleSusspend(id){
        https.get(`admin/user/action/${id}`).then(
          Response => {
              setUsers(Response.data.data.data),
              toast('Users successfully susspended');
          }
        ).catch(error => {
          toast(`we cant sesspended User ${error}`);
        })
      }
    return (
        <div className={Styles.tableItems}>
            <div className={Styles.profile}>
                <div className={Styles.profileImage}>
                    t
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
            <Link className={Styles.pointer} href={`${props.link}`}>
                Detail
            </Link>

        </div>
    )
}
