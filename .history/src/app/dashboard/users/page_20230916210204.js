import React from 'react'
import Styles from './posts.module.scss'
import PageHeader from '../components/PageHeader/index'
export default function Page() {
  return (
    <div>

      <PageHeader title="Users" description="View all your users"/>
      <div className={Styles.table}>
        <div className={Styles.tableHeader}>
          <div className={tableTitle}>
            <span>Alluser</span><
          </div>
        </div>
      </div>

    </div>
  )
}
