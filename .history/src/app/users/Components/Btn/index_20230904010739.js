import React, { useContext } from 'react'
import ThemeContext from '../../Api/context/ThemeContext'
import Styles from './style.module.scss'

export default function Index(props) {
  const theme = useContext(ThemeContext);
  return (
    <>
      {
        props.type === 'primary' ?
          <button className={Styles.primary} >
            
            {props.title}
            {
              props.hasIcon
                ?
                <a>{props.children}</a>
                :
                <></>
            }
          </button >
          :
          <button className={theme === 'dark' ? Styles.secondary : Styles.secondaryDark} >
            {props.title}
            {
              props.hasIcon
                ?
                <a>{props.children}</a>
                :
                <></>
            }
          </button >
      }

    </>



  )
}
