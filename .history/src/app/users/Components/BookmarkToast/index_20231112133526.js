import React from "react";
import Styles from "./style.module.scss";
import BookmarkDone from "../../Assets/svg/BoomarkDone";
export default function index() {
  return (
    <div className={s}>
      <div className={Styles.container}>
        <div className={Styles.bookmarkIcon}>
          <BookmarkDone />
        </div>
        <div className={Styles.text}>Bookmarked Successfully</div>
      </div>
    </div>
  );
}
