import React from "react";
import style from "./style.module.scss";
import Loading from '../../Assets/svg/loading'
import mo
export default function index(props) {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.loading} >
            <Loading/>
        </div>
        <div className={style.title}>{props.title}</div>
      </div>
    </div>
  );
}
