import React from 'react'
import Styles from './style.module.scss'

export default function Index(props) {

  return (
   <div className={Styles.imageContainer}>
      <input type='file' />
   </div>
  )
}
