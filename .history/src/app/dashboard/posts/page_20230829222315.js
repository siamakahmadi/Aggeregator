'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import styles from './posts.module.scss'
import Btn from '../components/Btn/index'
import Input from '../components/Input/index'
import PageHeader from '../components/PageHeader/index'
import StatuLabel from '../components/StatusLabel/index'
import Https from '../../../../Axios/Https'

export default function Page() {

  const [posts, setPosts] = useState([])
  const https = new Https();


 

  const postsLists = posts.message === "Post fetched" ?
    <>
      {posts.data.data.map(item => (
        <div key={item.id} className={styles.row}>
          <div className={styles.leftSide}>
            <div className={styles.checkBox}>
              <input type='checkbox' />
            </div>
            <div className={styles.title}>
              <div className={styles.text}>
                {item.title}
              </div>
              <div className={styles.link}>
                {item.website}
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.publishDate}>
              none
            </div>
            <div className={styles.status}>
              <StatuLabel title={item.status} type={item.status} />
            </div>
            <a className={styles.Functional} >
              <p>View</p>
            </a>
            <a className={styles.Functional} >
              {item.status === 'Published' ?  <p onClick={()=>switchDraft(item.id)}>Draft</p> : <p>Publish</p>}
            </a>
            <a className={styles.Functional} onClick={() => deletePost(item.id)} >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 4.99935V4.33268C13.3333 3.39926 13.3333 2.93255 13.1517 2.57603C12.9919 2.26243 12.7369 2.00746 12.4233 1.84767C12.0668 1.66602 11.6001 1.66602 10.6667 1.66602H9.33333C8.39991 1.66602 7.9332 1.66602 7.57668 1.84767C7.26308 2.00746 7.00811 2.26243 6.84832 2.57603C6.66667 2.93255 6.66667 3.39926 6.66667 4.33268V4.99935M8.33333 9.58268V13.7493M11.6667 9.58268V13.7493M2.5 4.99935H17.5M15.8333 4.99935V14.3327C15.8333 15.7328 15.8333 16.4329 15.5608 16.9677C15.3212 17.4381 14.9387 17.8205 14.4683 18.0602C13.9335 18.3327 13.2335 18.3327 11.8333 18.3327H8.16667C6.76654 18.3327 6.06647 18.3327 5.53169 18.0602C5.06129 17.8205 4.67883 17.4381 4.43915 16.9677C4.16667 16.4329 4.16667 15.7328 4.16667 14.3327V4.99935" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </> : <div>wating...</div>

  useEffect(() => {
    https.get('admin/browse/post').then(Response => {
      setPosts(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])


  function deletePost(id) {
    https.get(`admin/post/action/${id}?action=delete`).then(
       Response => {
        console.log(Response.status)
      }
    ).catch(error => {
      console.log(error)
    })
  }

  function switchDraft(id){
    
  }






  return (
    <div className={styles.mainPostsContainer}>
      <PageHeader title="Posts" description="View your team’s trades and transactions.">
        <a href="/dashboard/posts/newpost">
          <Btn title="add new site" hasIcon={true} type="primary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0013 4.16602V15.8327M4.16797 9.99935H15.8346" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Btn>
        </a>
      </PageHeader>
      <div className={styles.tableContainer}>
        <div className={styles.tableToolbar}>
          <div className={styles.toolbarItems}>
            <div className={styles.item}>
              <Input title="Search for order" />
            </div>
            <div className={styles.item}>
              <Input title="Search for order" />
            </div>
            <div className={styles.item}>
              <Input title="Search for order" />
            </div>
            <div className={styles.item}>
              <Input title="Search for order" />
            </div>
          </div>
        </div>
        <div className={styles.tableTitle}>
          <div className={styles.leftSide}>
            <div className={styles.text}>All Sites</div>
            <div className={styles.badgeNumber}>198 Sites</div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.deleteBtn}>
              <Btn hasIcon={true}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 4.99935V4.33268C13.3333 3.39926 13.3333 2.93255 13.1517 2.57603C12.9919 2.26243 12.7369 2.00746 12.4233 1.84767C12.0668 1.66602 11.6001 1.66602 10.6667 1.66602H9.33333C8.39991 1.66602 7.9332 1.66602 7.57668 1.84767C7.26308 2.00746 7.00811 2.26243 6.84832 2.57603C6.66667 2.93255 6.66667 3.39926 6.66667 4.33268V4.99935M8.33333 9.58268V13.7493M11.6667 9.58268V13.7493M2.5 4.99935H17.5M15.8333 4.99935V14.3327C15.8333 15.7328 15.8333 16.4329 15.5608 16.9677C15.3212 17.4381 14.9387 17.8205 14.4683 18.0602C13.9335 18.3327 13.2335 18.3327 11.8333 18.3327H8.16667C6.76654 18.3327 6.06647 18.3327 5.53169 18.0602C5.06129 17.8205 4.67883 17.4381 4.43915 16.9677C4.16667 16.4329 4.16667 15.7328 4.16667 14.3327V4.99935" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Btn>
            </div>

            <div className={styles.draftBtn}>
              <Btn title="Draft" />
            </div>

            <div className={styles.Publish}>
              <Btn title="Publish" type="primary" />
            </div>

          </div>
        </div>

        <div className={styles.rowLayout}>
          {postsLists}
        </div>
      </div>
    </div>
  )
}
