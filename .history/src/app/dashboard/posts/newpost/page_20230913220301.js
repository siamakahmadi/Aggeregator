'use client'
import { useState } from 'react'
import styles from './style.module.scss'
import PageHeader from '../../components/PageHeader'
import Btn from '../../components/Btn/index'
import Input from '../../components/Input/index'
import InputContainer from '../../components/InputContainer/index'
import CheckBox from '../../components/CheckBox'
import DescriptionInput from '../../components/DescriptionInput'

export default function NewPost() {

  const [values, setValues] = useState({
    feature: Boolean,
    priority: '',
    post_title:'',
    description:'',
    tags:'',
    type_face:'',
    website:'',
    permlink:'',
    anchor_website:'',
    version_title:'',
  })

  return (
    <main>
      <PageHeader title="New Post" description="View your team’s trades and transactions.">
        <div className={styles.btns}>
          <Btn hasIcon={true}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 4.99935V4.33268C13.3333 3.39926 13.3333 2.93255 13.1517 2.57603C12.9919 2.26243 12.7369 2.00746 12.4233 1.84767C12.0668 1.66602 11.6001 1.66602 10.6667 1.66602H9.33333C8.39991 1.66602 7.9332 1.66602 7.57668 1.84767C7.26308 2.00746 7.00811 2.26243 6.84832 2.57603C6.66667 2.93255 6.66667 3.39926 6.66667 4.33268V4.99935M8.33333 9.58268V13.7493M11.6667 9.58268V13.7493M2.5 4.99935H17.5M15.8333 4.99935V14.3327C15.8333 15.7328 15.8333 16.4329 15.5608 16.9677C15.3212 17.4381 14.9387 17.8205 14.4683 18.0602C13.9335 18.3327 13.2335 18.3327 11.8333 18.3327H8.16667C6.76654 18.3327 6.06647 18.3327 5.53169 18.0602C5.06129 17.8205 4.67883 17.4381 4.43915 16.9677C4.16667 16.4329 4.16667 15.7328 4.16667 14.3327V4.99935" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Btn>
          <Btn title="Draft" />
          <Btn title="add new site" hasIcon={true} type="primary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0013 4.16602V15.8327M4.16797 9.99935H15.8346" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Btn>
        </div>
      </PageHeader>

      <form>
        <div className={styles.Inputs}>
          <InputContainer title="Featured">
            <div className={styles.checkBtn}>
              <CheckBox />
            </div>
            <Input placeholder="Enter a number" title="Priority" />
          </InputContainer>

          <InputContainer title="Main info" description="Update your photo and personal details here.">
            <Input placeholder="Enter a title" title="Title" />
            <div className={styles.mt24}>
              <DescriptionInput Title="Description" PlaceHolder="Enter a short description" Description="275 characters left" />
            </div>
          </InputContainer>

          <InputContainer title="Category info" description="Select your category">
            <Input placeholder="Website" title="Title" />

          </InputContainer>
        </div>
      </form>

    </main>
  )
}
