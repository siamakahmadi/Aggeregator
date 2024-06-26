import { useContext } from "react";
import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import ThemeContext from "../../Api/context/ThemeContext";

export default function Index(props) {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? styles.mainContainer : styles.mainContainerDark
      }
    >
      <div className={styles.body}>{props.children}</div>
      <div className={styles.submitDesign}>
        <div className={styles.title}>Did you design?</div>
        <div className={styles.description}>
          Take projects from idea to launch in one AI-powered workspace.
        </div>
        <div className={styles.link}>
          <Link href='' onClick={props.submitBtnEvent}>Submit now</Link>
        </div>
      </div>
    </div>
  );
}
