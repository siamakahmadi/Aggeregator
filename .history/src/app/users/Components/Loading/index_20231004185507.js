import React from "react";
import style from "./style.module.scss";
import Loading from "../../Components/Loading";
export default function index(props) {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.loading}>
        </div>
        <div className={style.title}>{props.title}</div>
      </div>
    </div>
  );
}
