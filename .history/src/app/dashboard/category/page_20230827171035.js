import React from 'react'
import styles from './styles.module.scss'
import PageHeader from '../components/PageHeader/index'
export default function page() {
  return (
    <div>
      <PageHeader title="Categeries" description="View your team’s trades and transactions."/>
      <div className={styles.itemsContainer}>
          <div className={styles}>
            <div className={styles.title}>
                Tags
            </div>
            <div className=''>

            </div>
          </div>
      </div>
    </div>
  )
}