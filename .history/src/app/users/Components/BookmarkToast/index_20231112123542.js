import React from "react";
import Styles from "./style.module.scss";
import BookmarkDone from '../../'
export default function index() {
  return (
    <div className={Styles.container}>
      <div className={Styles.bookmarkIcon}>

      </div>
      <div className={Styles.text}>Bookmarked Successfully</div>
    </div>
  );
}
