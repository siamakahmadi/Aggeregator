import React ,{useContext} from 'react'
import ThemeContext from '../../Api/context/ThemeContext'
import styles from './style.module.scss'
import Feature from '../../Assets/svg/feature'
export default function index(props) {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme === 'light' ? styles.label : styles.labelDark}>
            <div className={styles.icon}>
               <Feature/>
            </div>
            <div className={styles.text}>
                {props.title}
            </div>
        </div>
    )
}
