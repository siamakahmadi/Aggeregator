'use client'
import { useState, useEffect } from 'react'
import Styles from './posts.module.scss'
import PageHeader from '../components/PageHeader/index'
import StatusLabel from '../components/StatusLabel/index'
import Http from '../../../../Axios/Https'
import { toast } from 'react-toastify';
export default function Page() {

  const https = new Http();
  const [users,setUsers] = useState()

  useEffect(() => {
    https.get('admin/user/index?paginate=20').then(
      Response => {
        setUsers(Response.data),
        toast('Users successfully featched');
      }
    ).catch(error => {
      toast(`we cant featched Users ${error}`);
    })
  }, [])


  const categoryList = category.message === "Category deleted" ?
  <>
    {category.data.map(item => (
      <div key={item.id} className={styles.item}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.76056 15.8328H4.16797V13.2402" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.16797 6.75861V4.16602H6.76056" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.8348 13.2402V15.8328H13.2422" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.8346 15.8327L4.16797 4.16602" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.8346 4.16602L4.16797 15.8327" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.2422 4.16602H15.8348V6.75861" stroke="#A1A6AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className={styles.title}>{item.name}</div>
        </div>
        <div className={styles.toolbar}>
          <a className={styles.detailBtn}>Detail</a>
          <div className={styles.icon} onClick={() => deleteItem(item.id)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    ))}
  </> : <div>wating...</div>




  return (
    <div>
      <PageHeader title="Users" description="View all your users" />
      <div className={Styles.table}>
        <div className={Styles.tableHeader}>
          <div className={Styles.tableTitle}>
            <span>Alluser</span><StatusLabel title="198 users" />
          </div>
          <div className={Styles.rowTitles}>
            <div className={Styles.rowItem}>Name</div>
            <div className={Styles.rowItem}>Email</div>
            <div className={Styles.rowItem}>DateRegistered</div>
            <div className={Styles.rowItem}>Status</div>
            <div className={Styles.rowItem}></div>
            <div className={Styles.name}></div>
          </div>
        </div>
        <div className={Styles.tableBody}>
          <div className={Styles.tableItems}>
            <div className={Styles.profile}>
              <div className={Styles.profileImage}>
                <img />
              </div>
              <div className={Styles.userName}>SiamakAhmadi</div>
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
        </div>
      </div>

    </div>
  )
}
