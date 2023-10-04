import React from "react";
import style from "./style.module.scss";
import Loading from '../../Assets/svg/loading'
import { motion } from "framer-motion";
export default function index(props) {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }} className={style.loading} >
            <Loading/>
        </motion.div>
        <div className={style.title}>{props.title}</div>
      </div>
    </div>
  );
}
