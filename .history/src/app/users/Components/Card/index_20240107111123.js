"use client";
import React, { useContext } from "react";
import Styles from "./style.module.scss";
import Label from "../Label/index";
import ThemeContext from "../../Api/context/ThemeContext";
import Arrow from "../../Assets/svg/arrow.js";
import Plus from "../../Assets/svg/plus";
import TickIcon from "../../Assets/svg/tick";
import Link from "next/link";
import Https from "../../Api/Https";
import ToastContext from "../../Api/context/ToastContext";
import { motion } from "framer-motion";

export default function Index(props) {
  const https = new Https();
  const theme = useContext(ThemeContext);
  const { value, setValue } = useContext(ToastContext);

  // Check if versions array and its first element exist
  const version = props.versions && props.versions[0];

  // Check if files array and its first element exist
  const file = version && version.files && version.files[0];

  // Access the address property if it exists
  const address = file && file.address;

  const handleButtonClick = () => {
    setValue(true);
    setInterval(() => {
      setValue(false);
    }, 3000);
  };

  function bookmarkAction() {
    https
      .post(`bookmark/action/${props.id}`)
      .then(() => {
        handleButtonClick();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className={Styles.container}
    >
      <div key={props.key} className={Styles.cardImage}>
      {address ? (
        <img src={https://address} alt="Image Alt Text" />
      ) : (
        <span>No image available</span>
      )}
        <div
          className={
            theme === "dark"
              ? Styles.imageToolbarDark
              : Styles.imageToolbarLight
          }
        >
          <div className={Styles.add} onClick={bookmarkAction}>
            <div className={props.isBookmark === 1 ? Styles.isBookmark : ""}>
              {props.isBookmark === 1 ? <TickIcon /> : <Plus />}
            </div>
          </div>
          <Link className={Styles.open} href={`content/${props.route}`}>
            <Arrow />
          </Link>
        </div>
        <div className={Styles.labels}>
          {props.activeLabel === true && <Label title={props.labelTitle} />}
        </div>
      </div>
      <div className={Styles.title}>
        <p className={Styles.text}>{props.title}</p>
      </div>
    </motion.div>
  );
}
