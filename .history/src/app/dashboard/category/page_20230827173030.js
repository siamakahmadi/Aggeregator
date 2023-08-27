import React from 'react'
import styles from './styles.module.scss'
import PageHeader from '../components/PageHeader/index'
import Btn from '../components/Btn/index'
export default function page() {
  return (
    <div>
      <PageHeader title="Categeries" description="View your team’s trades and transactions." />
      <div className={styles.itemsContainer}>
        <div className={styles.header}>
          <div className={styles.title}>
            Tags
          </div>
          <div className={styles.description}>
            Update your photo and personal details here.
          </div>
        </div>
        <div className={styles.container}>

          {/* items */}

          <div>
            
          </div>

          {/* items */}
        </div>

        <div className={styles.footer}>
          <Btn title="Add New"/>
        </div>
      </div>
    </div>
  )
}
