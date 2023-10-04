import React, { useContext } from 'react'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'
import CloseIcon from '../../Assets/svg/closeIcon'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Index(props) {
    const router = useRouter()
    const theme = useContext(ThemeContext)
    return (
        <motion.div   className={theme === 'light' ? Styles.moadl : Styles.moadlDark}>
            <div className={Styles.modalContainer} animate={{ scale: 1 }} transition={{ ease: "easeOut"}}>
                <div className={Styles.modalHeader}>
                    <div className={Styles.modalTitle}>
                        <div className={Styles.text}>
                            {props.title}
                        </div>
                    </div>
                    {props.hasIcon
                        ?
                        <div className={Styles.closeIcon} onClick={()=>router.back()}>
                            <CloseIcon/>
                        </div>
                        :
                        <></>}

                </div>
                <div className={Styles.modalContent}>
                    {props.children}
                </div>
            </div>
        </motion.div>
    )
}
