import React from 'react'
import Styles from './posts.module.scss'
import PageHeader from '../components/PageHeader/index'
import StatusLabel from '../components/StatusLabel/index'
export default function Page() {
  return (
    <div>

      <PageHeader title="Users" description="View all your users"/>
      <div className={Styles.table}>
        <div className={Styles.tableHeader}>
          <div className={Styles.tableTitle}>
            <span>Alluser</span><StatusLabel title="198 users"/>
          </div>
          <div className={Styles.rowTitles}>
            <div>
              
            </div>
          </div>
        </div>
        <div className={Styles.tableBody}>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}
