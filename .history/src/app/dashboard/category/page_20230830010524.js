'use client'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import PageHeader from '../components/PageHeader/index'
import Https from '../../../../Axios/Https'
import CloseIcon from '../assets/svg/closeIcon'
import Input from '../components/Input/index'

export default function Page() {

  const [addItemModal , setAddItemModal] = useState(true)

  const [category, setCategory] = useState({})
  const https = new Https();

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

  useEffect(() => {
    https.get('admin/category/index').then(
      Response => {
        setCategory(Response.data)
      }
    ).catch(error => {
      console.log(error)
    })
  }, [deleteItem])

  function deleteItem(id) {
    https.delete(`admin/category/${id}`).then(
      Response => {
        console.log(Response)
      }
    ).catch(error => {
      console.log(error)
    })
  }

  return (
    <>
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

          <div className={styles.items}>
            {categoryList}
          </div>

          {/* items */}
          <div className={styles.addBtnContainer}>
            <a className={styles.btn}>Add New</a>
          </div>
        </div>

      </div>

      <div className={styles.itemsContainer}>
        <div className={styles.header}>
          <div className={styles.title}>
            Stack
          </div>
          <div className={styles.description}>
            Update your photo and personal details here.
          </div>
        </div>
        <div className={styles.container}>

          {/* items */}

          <div className={styles.items}>

            <div className={styles.item}>
              <div className={styles.content}>
                <div className={styles.title}>title</div>
              </div>
              <div className={styles.toolbar}>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.content}>
                <div className={styles.title}>title</div>
              </div>
              <div className={styles.toolbar}>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.content}>
                <div className={styles.title}>title</div>
              </div>
              <div className={styles.toolbar}>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* items */}
          <div className={styles.addBtnContainer}>
            <a className={styles.btn}>Add New</a>
          </div>
        </div>

      </div>

      <div className={styles.itemsContainer}>
        <div className={styles.header}>
          <div className={styles.title}>
            Type Face
          </div>
          <div className={styles.description}>
            Update your photo and personal details here.
          </div>
        </div>
        <div className={styles.container}>

          {/* items */}

          <div className={styles.items}>
            <div className={styles.item}>
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
                <div className={styles.title}>title</div>
              </div>
              <div className={styles.toolbar}>
                <a className={styles.detailBtn}>Detail</a>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.item}>
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
                <div className={styles.title}>title</div>
              </div>
              <div className={styles.toolbar}>
                <a className={styles.detailBtn}>Detail</a>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.item}>
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
                <div className={styles.title}>title</div>
              </div>
              <div className={styles.toolbar}>
                <a className={styles.detailBtn}>Detail</a>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.item}>
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
                <div className={styles.title}>title</div>
              </div>
              <div className={styles.toolbar}>
                <a className={styles.detailBtn}>Detail</a>
                <div className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.667 5.30977H3.32812M8.33021 14.1676H11.6649M12.95 17.5023H7.04515C6.06499 17.5023 5.25007 16.7477 5.17489 15.7704L4.37023 5.30977H15.6249L14.8202 15.7704C14.7451 16.7477 13.9302 17.5023 12.95 17.5023ZM7.65283 2.49609H12.3423C12.8603 2.49609 13.2802 2.916 13.2802 3.43398V5.30977H6.71494V3.43398C6.71494 3.18524 6.81375 2.94668 6.98964 2.7708C7.16553 2.59491 7.40408 2.49609 7.65283 2.49609Z" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* items */}
          <div className={styles.addBtnContainer}>
            <a className={styles.btn}>Add New</a>
          </div>
        </div>

      </div>




    </div>
      {
        addItemModal ? <>
        <div className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.header}>
                  <div>Detail</div>
                  <div><CloseIcon/></div>
                </div>
                <div className={styles.body}>
                    <Input title="Menu Title" placeholder="Add a title for category"/>
                    <Input title="Page Title" placeholder="This title will show on page header"/>
                    <Input title="Page Description" placeholder="This description will show on page header"/>
                    Seo Configration
                    <Input title="Page tag" placeholder="This title will show on page header"/>
                    <Input title="Page Description" placeholder="This description will show on page header"/>
                </div>
            </div>
        </div>
        </> : <></>
      }</>
  )
}
