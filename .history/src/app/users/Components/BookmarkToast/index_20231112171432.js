import React from "react";
import { useContext } from "react";
import ThemeContext from "../../Api/context/ThemeContext";
import Styles from "./style.module.scss";
import BookmarkDone from "../../Assets/svg/BoomarkDone";

export default function index() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "dark" ?Styles.containerToastDark Styles.container : 
      }
    >
      <div className={Styles.containerToast}>
        <div className={Styles.bookmarkIcon}>
          <BookmarkDone />
        </div>
        <div className={Styles.text}>Bookmarked Successfully</div>
      </div>
    </div>
  );
}
