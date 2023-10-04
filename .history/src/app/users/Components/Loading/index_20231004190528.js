import React from "react";
import style from "./style.module.scss";
import Loading from '../../Assets/svg/loading'
import { motion } from "framer-motion";
import ThemeContext from "../../Api/context/ThemeContext";
export default function index(props) {
    const theme = useContext(ThemeContext);
  return (
    <div className={style.background}>
      <div className={style.container}>
        <motion.div  animate={{ rotate: 360 }} transition={{repeat: Infinity, duration: 0.6 }} className={style.loading} >
            <Loading/>
        </motion.div>
        <div className={style.title}>{props.title}</div>
      </div>
    </div>
  );
}
