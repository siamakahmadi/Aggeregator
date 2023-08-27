import React from 'react'
import styles from './styles.module.scss'
import PageHeader from '../components/PageHeader/index'
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
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.icon}>icon</div>
              <div className={styles.title}>title</div>
            </div>
            <div className={styles.toolbar}>
              <a>Detail</a>
              <div className={styles.icon}>
                I
              </div>
            </div>
          </div>

          {/* items */}
        </div>
      </div>
    </div>
  )
}
