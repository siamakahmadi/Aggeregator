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
              <div className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.76056 15.8328H4.16797V13.2402" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.16797 6.75861V4.16602H6.76056" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8348 13.2402V15.8328H13.2422" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8346 15.8327L4.16797 4.16602" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8346 4.16602L4.16797 15.8327" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.2422 4.16602H15.8348V6.75861" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
              </div>
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
