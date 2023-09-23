import Link from 'next/link';
import React, { useContext } from 'react'
import ThemeContext from '../../Api/context/ThemeContext'
import Styles from './style.module.scss'

export default function Index(props) {
  const theme = useContext(ThemeContext);
  return (
    <>
      {
        props.type === 'primary' ?
          <button type={props.submitType}>
            {/* <Link href={props.link < 0 ? '' : `${props.link}`} replace className={Styles.primary} >
              {props.title}
              {
                props.hasIcon
                  ?
                  <span>{props.children}</span>
                  :
                  <></>
              }
            </Link > */}
          </button>
          :
          <button type={props.submitType}>
            <Link href={props.link < 0 ? '#' : `${props.link}`} replace className={theme === 'dark' ? Styles.secondary : Styles.secondaryDark} >
              {props.title}
              {
                props.hasIcon
                  ?
                  <span>{props.children}</span>
                  :
                  <></>
              }
            </Link>
          </button>
      }

    </>



  )
}
