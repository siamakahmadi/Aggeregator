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


  const users = category.message === "Category deleted" ?
  <>
    {category.data.map(item => (
   
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
