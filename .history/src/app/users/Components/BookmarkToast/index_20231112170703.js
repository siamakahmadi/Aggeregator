import React from "react";
import { useContext } from "react";
ThemeContext
import Styles from "./style.module.scss";
import BookmarkDone from "../../Assets/svg/BoomarkDone";
import ThemeContext from "../../Api/context/ThemeContext";

export default function index() {
  const theme = useContext()
  return (
    <div className={Styles.container}>
      <div className={Styles.containerToast}>
        <div className={Styles.bookmarkIcon}>
          <BookmarkDone />
        </div>
        <div className={Styles.text}>Bookmarked Successfully</div>
      </div>
    </div>
  );
}
