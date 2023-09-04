
import React, { useContext } from 'react'
import ThemeContext from '../../Api/context/ThemeContext'
import Styles from './style.module.scss'

export default function Index(props) {
  const theme = useContext(ThemeContext);
  return (
    <>
      {
        props.type === 'primary' ?
          <a href={props.link < 0 ? '#' : `${props.link}`} replace className={Styles.primary} >
            {props.title}
            {
              props.hasIcon
                ?
                <span>{props.children}</span>
                :
                <></>
            }
          </a >
          :
          <a href={props.link < 0 ? '#' : `${props.link}`} replace className={theme === 'dark' ? Styles.secondary : Styles.secondaryDark} >
            {props.title}
            {
              props.hasIcon
                ?
                <span>{props.children}</span>
                :
                <></>
            }
          </a>
      }

    </>



  )
}
