import React from 'react'
import { useEffect } from 'react'
import Styles from './posts.module.scss'
import PageHeader from '../components/PageHeader/index'
import StatusLabel from '../components/StatusLabel/index'
export default function Page() {



  useEffect(() => {
    https.get('admin/category/index').then(
      Response => {
        setCategory(Response.data),
        toast('categories successfully featched');
      }
    ).catch(error => {
      toast(`we cant featched categories ${error}`);
    })
  }, [])



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
