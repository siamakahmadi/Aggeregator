import { useContext } from 'react'
import React from 'react'
import styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'
import { useRouter } from 'next/router'
export default function Index(props) {
  const router = useRouter()
  const {slug} = router.query

  const theme = useContext(ThemeContext)
  return (
    <div className={theme === 'light' ? styles.mainContainer : styles.mainContainerDark}>
      <div className={styles.body}>
        {props.children}
        
      </div>
      <div className={styles.submitDesign}>
        <div className={styles.title}>Did you design?</div>
        <div className={styles.description}>Take projects from idea to launch in one AI-powered workspace.</div>
        <div className={styles.link}><a>Submit now
          {slug}</a></div>
      </div>
    </div>
  )
}
