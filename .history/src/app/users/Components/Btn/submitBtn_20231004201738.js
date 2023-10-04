
import React, { useContext } from 'react'
import ThemeContext from '../../Api/context/ThemeContext'
import Styles from './style.module.scss'
import { motion } from 'framer-motion';

export default function Index(props) {
  const theme = useContext(ThemeContext);
  return (
    <>
      {
        props.type === 'primary' ?
          <motion.button whileTap={{scale:0.1}} type={props.submitType} onClick={props.onClick} className={Styles.primary}>
              {props.title}
              {
                props.hasIcon
                  ?
                  <span>{props.children}</span>
                  :
                  <></>
              }
          </motion.button>
          :
          <motion.button v type={props.submitType} className={theme === 'dark' ? Styles.secondary : Styles.secondaryDark}>
              {props.title}
              {
                props.hasIcon
                  ?
                  <span>{props.children}</span>
                  :
                  <></>
              }
          </motion.button>
      }

    </>



  )
}
