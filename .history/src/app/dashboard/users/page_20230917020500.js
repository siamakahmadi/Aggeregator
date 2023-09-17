'use client'
import { useState, useEffect } from 'react'
import Styles from './users.module.scss'
import PageHeader from '../components/PageHeader/index'
import StatusLabel from '../components/StatusLabel/index'
import TableItem from './components/tableItem'
import Http from '../../../../Axios/Https'
import { toast } from 'react-toastify';
export default function Page() {

  const https = new Http();
  const [users, setUsers] = useState()
console.log(users)

  useEffect(() => {
    https.get('admin/user/index?paginate=20').then(
      Response => {
        setUsers(Response.data.data.data),
          toast('Users successfully featched');
      }
    ).catch(error => {
      toast(`we cant featched Users ${error}`);
    })
  }, [])

  const tableItems = users.map(items=>(
    <TableItem name={"siamak"} email="siamak@gmail.com" date="date" status="free" />
  ))



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
          <TableItem name="siamak" email="siamak@gmail.com" date="date" status="free" />
          {tableItems}
        </div>
      </div>

    </div>
  )
}
