'use client'
import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import PageHeader from '../components/PageHeader/index'
import Https from '../../../../Axios/Https'
import CloseIcon from '../assets/svg/closeIcon'
import Input from '../components/Input/index'
import { toast } from 'react-toastify';
import { useRouter, usePathname } from "next/navigation";
import Link from 'next/link'


export default function Page() {

  const [addTag, setAddTag] = useState(false)
  const [addStack, setAddStack] = useState(false)
  const [typeFace, setTypeFace] = useState(false)
  const [category, setCategory] = useState({})

  const [formData, setFormData] = useState({});


  const pathname = usePathname()
  console.log(pathname)

  const router = useRouter()

  const https = new Https();


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


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    https.post('admin/category', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(
        Response => {
          toast.success('Category Sucessfully created');
        }
      ).catch(error => {
        toast.error(`Create is faild ${error}`);
      })
  }



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


  function deleteItem(id) {
    https.delete(`admin/category/${id}`).then(
      Response => {
        toast.success('Category Sucessfully Deleted')
      }
    ).catch(error => {
      toast.error(`Delete is faild ${error}`);
    })
  }

  return (
    <>
      <div>
        <PageHeader title="Categeries" description="View your team’s trades and transactions." />
        <div className={styles.itemsContainer}>
          <div className={styles.header}>
            <div className={styles.title} onClick={() => add()}>
              Tags
              <div>
              </div>
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
              <Link href='/dashboard/category/tag' className={styles.btn} >Add New</Link>
              <span onClick={()=>{
                preven
                router.push('/dashboard/category/tag')
                }}>Add new version</span>
              <Link href='/users/login' className={styles.btn}>Sign in</Link>
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
            <div className={styles.addBtnContainer} onClick={() => addStack ? setAddStack(false) : setAddStack(true)}>
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
            <div className={styles.addBtnContainer} onClick={() => typeFace ? setTypeFace(false) : setTypeFace(true)}>
              <a className={styles.btn}>Add New</a>
            </div>
          </div>

        </div>
      </div>
      {
         pathname === '/dashboard/category/tag' &&
          <div className={styles.modal}>
            <div className={styles.container}>
              <div className={styles.header}>
                <div>Add New Tag</div>
                <div className={styles.closeIcon} onClick={() => addTag ? setAddTag(false) : setAddTag(true)}>
                  <CloseIcon />
                </div>
              </div>
              <div className={styles.body}>


                <form onSubmit={handleSubmit}>
                  <Input name='name' value={formData.name} onChange={handleChange} placeholder="name" />
                  <Input name='title' value={formData.title} onChange={handleChange} placeholder="title" />
                  <Input name='type' value={formData.type} onChange={handleChange} placeholder="type" />
                  <Input name='page_title' value={formData.page_title} onChange={handleChange} placeholder="page_title" />
                  <Input name='page_description' value={formData.page_description} onChange={handleChange} placeholder="pageTitle" />
                  <Input name='meta_description' value={formData.meta_description} onChange={handleChange} placeholder="pageTitle" />
                  <div className={styles.buttons}>
                    <div className={styles.discardBtn} onClick={() => addTag ? setAddTag(false) : setAddTag(true)} >
                      Discard
                    </div>
                    <button type="submit" className={styles.saveBtn}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      }
      {

        pathname === '/dashboard/category/stack' &&
        <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div>Add New Stack</div>
            <div className={styles.closeIcon} onClick={() => addStack ? setAddStack(false) : setAddStack(true)}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.body}>
            <Input title="Menu Title" placeholder="Add a title for category" />
            <Input title="Page Title" placeholder="This title will show on page header" />
            <Input title="Page Description" placeholder="This description will show on page header" />
            Seo Configration
            <Input title="Page tag" placeholder="This is the title " />
            <Input title="Meta Description" placeholder="This is the Meta description" />
            <div className={styles.buttons}>
              <div className={styles.discardBtn} onClick={() => addStack ? setAddStack(false) : setAddStack(true)} >
                Discard
              </div>
              <div className={styles.saveBtn}>
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      {
          pathname === '/dashboard/category/typeface' &&
          <div className={styles.modal}>
            <div className={styles.container}>
              <div className={styles.header}>
                <div>Type Face</div>
                <div className={styles.closeIcon} onClick={() => typeFace ? setTypeFace(false) : setTypeFace(true)}>
                  <CloseIcon />
                </div>
              </div>
              <div className={styles.body}>
                <Input title="Menu Title" placeholder="Add a title for category" />
                <Input title="Page Title" placeholder="This title will show on page header" />
                <Input title="Page Description" placeholder="This description will show on page header" />
                Seo Configration
                <Input title="Page tag" placeholder="This is the title " />
                <Input title="Meta Description" placeholder="This is the Meta description" />
                <div className={styles.buttons}>
                  <div className={styles.discardBtn} onClick={() => typeFace ? setTypeFace(false) : setTypeFace(true)} >
                    Discard
                  </div>
                  <div className={styles.saveBtn}>
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
      }

    </>

  )
}
