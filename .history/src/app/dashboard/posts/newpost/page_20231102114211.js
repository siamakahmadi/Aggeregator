'use client'
import { useState } from 'react'
import styles from './style.module.scss'
import PageHeader from '../../components/PageHeader'
import Btn from '../../components/Btn/index'
import Input from '../../components/Input/index'
import InputContainer from '../../components/InputContainer/index'
import CheckBox from '../../components/CheckBox'
import DescriptionInput from '../../components/DescriptionInput'
import ImageUploader from '../../components/ImageUploader'
import Category from '../../components/Input/index'
import Https from '../../../../../Axios/Https'

export default function NewPost() {



  const [formData, setFormData] = useState({});
  console.log(formData)

  const https = new Https();


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }
  function handleFileChange(event) {
    const files = event.target.files;
    setFormData({
      ...formData,
      version_picture: Array.from(files),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.version_picture && formData.images.length > 0) {
      const imageFiles = formData.version_picture;
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append('images', imageFiles[i]);
      }
    }
    
    https.post('admin/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(
        Response => {
          console.log(Response)
        }
      ).catch(error => {
        console.log(error)
      })
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <PageHeader title="New Post" description="View your team’s trades and transactions.">
          <div className={styles.btns}>
            <Btn hasIcon={true}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 4.99935V4.33268C13.3333 3.39926 13.3333 2.93255 13.1517 2.57603C12.9919 2.26243 12.7369 2.00746 12.4233 1.84767C12.0668 1.66602 11.6001 1.66602 10.6667 1.66602H9.33333C8.39991 1.66602 7.9332 1.66602 7.57668 1.84767C7.26308 2.00746 7.00811 2.26243 6.84832 2.57603C6.66667 2.93255 6.66667 3.39926 6.66667 4.33268V4.99935M8.33333 9.58268V13.7493M11.6667 9.58268V13.7493M2.5 4.99935H17.5M15.8333 4.99935V14.3327C15.8333 15.7328 15.8333 16.4329 15.5608 16.9677C15.3212 17.4381 14.9387 17.8205 14.4683 18.0602C13.9335 18.3327 13.2335 18.3327 11.8333 18.3327H8.16667C6.76654 18.3327 6.06647 18.3327 5.53169 18.0602C5.06129 17.8205 4.67883 17.4381 4.43915 16.9677C4.16667 16.4329 4.16667 15.7328 4.16667 14.3327V4.99935" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Btn>
            <Btn title="Draft" />
            <Btn title="Publish" submitType="submit" hasIcon={true} type="primary" >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0013 4.16602V15.8327M4.16797 9.99935H15.8346" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Btn>
          </div>
        </PageHeader>

        <div className={styles.Inputs}>
          <InputContainer title="Featured">
            <div className={styles.checkBtn}>
              <CheckBox name='Featured' value={formData.Featured} onChange={handleChange} title="Select as Featured post" />
            </div>
            <Input name='priority' value={formData.priority} onChange={handleChange} placeholder="Enter a number" title="Priority" />
          </InputContainer>


          <InputContainer title="Main info" description="Update your photo and personal details here.">
            <Input name='post_title' value={formData.post_title} onChange={handleChange} placeholder="Enter a title" title="Title" />
            <div className={styles.mt24}>
              <DescriptionInput name='description' value={formData.description} onChange={handleChange} placeholder="Enter a short description" title="Description" />
            </div>
          </InputContainer>

          <InputContainer title="Category info" description="Select your category">
            <div className={styles.mb24}>
              <Category name='category' value={formData.tags} onChange={handleChange} placeholder="Select a category" title="Category" />
            </div>
            <div className={styles.mb24}>
              <Category name='font' value={formData.type_face} onChange={handleChange} placeholder="Select a font" title="Font" />
            </div>
            <div className={styles.mb24}>
              <Input name='website' value={formData.website} onChange={handleChange} placeholder="Enter full website link" title="Website" />
            </div>
            <div className={styles.mt24}>
              <Input name='permlink' value={formData.permlink} onChange={handleChange} placeholder="Enter full permlink link" title="Enter full permlink website" />
            </div>
          </InputContainer>

          <InputContainer title="Version Info" description="type version detail complete">
            <Input name='version_title' value={formData.version_title} onChange={handleChange} placeholder="Enter Version" title="Version Title" />
            <Input name='version_number' value={formData.version_number} onChange={handleChange} placeholder="Enter Version" title="Version Number" />
            <Input name='version_date_added' value={formData.version_date_added} onChange={handleChange} placeholder="Version Date Added" title="Version Date Added" />
          </InputContainer>


          <InputContainer title="Alboum" description="Pic Gallery">
            <ImageUploader name='version_picture' value={formData.version_picture} onChange={handleChange} />
          </InputContainer>
        </div>
      </form>

    </main>
  )
}
