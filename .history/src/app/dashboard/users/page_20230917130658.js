'use client'
import { useState, useEffect } from 'react'
import Styles from './users.module.scss'
import PageHeader from '../components/PageHeader/index'
import StatusLabel from '../components/StatusLabel/index'
import TableItem from './components/tableItem'
import Modal from '../components/Modal/index'
import Http from '../../../../Axios/Https'
import { toast } from 'react-toastify';



export async function getServerSideProps(context) {
  return {
    props: {
      slug: context.params?.slug
    }
  }

}

export default function Page({slug}) {

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

  const tableItems = users ?
    users.map(item => (
      <TableItem name={item.name} email={item.email} date="date" status={item.is_premium === 0 ? 'Free' : 'Premium'} type={item.is_premium === 0 ? 'Draft' : ''}/>
    )) : <><div>Loading</div></>




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
          <Modal title="">
            
          </Modal>
          {tableItems}
        </div>
      </div>

    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
 
export default function Page({ data }) {
  // Render data...
}