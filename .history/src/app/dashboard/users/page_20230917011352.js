import React from 'react'
import Styles from './posts.module.scss'
import PageHeader from '../components/PageHeader/index'
import StatusLabel from '../components/StatusLabel/index'
export default function Page() {
  return (
    <div>
      <PageHeader title="Users" description="View all your users" />
      <div className={Styles.table}>
        <div className={Styles.tableHeader}>
          <div className={Styles.tableTitle}>
            <span>Alluser</span><StatusLabel title="198 users" />
          </div>
          <div className={Styles.rowTitles}>
            <div className={Styles.name}>Name</div>
            <div className={Styles.name}>Email</div>
            <div className={Styles.name}>DateRegistered</div>
            <div className={Styles.name}>Status</div>
          </div>
        </div>
        <div className={Styles.tableBody}>
          <div className={Styles.tableItems}>
              <div className={Styles.profile}>
                <div className={Styles.profileImage}>
                    <img/>
                </div>
                <div className={Styles.userName}>SiamakAhmadi</div>
              </div>
              <div className={Styles.email}>siamakahmadi@gmail.com</div>
              <div className={Styles.date}></div>
          </div>
        </div>
      </div>

    </div>
  )
}
