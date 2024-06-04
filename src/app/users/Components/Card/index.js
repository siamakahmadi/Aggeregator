"use client";
import React, { useContext, useState, useEffect } from "react";
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
import Cookies from "universal-cookie";

import IsLogginContext from "../../Api/context/IsLogginModal";

export default function Index(props) {
  const cookie = new Cookies();

  const [isLogginModal, setIsLogginModal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isBookmark, setIsBookmark] = useState(props.isBookmark);
  const https = new Https();
  const theme = useContext(ThemeContext);
  const { value, setValue } = useContext(ToastContext);
  const [userInfo, setUserInfo] = useState();
  // userInfo.isLoggin

  useEffect(() => {
    const userData = cookie.get("userLogin");
    setUserInfo(userData);
  }, []);

  const version = props.versions && props.versions[0];
  const file = version && version.files && version.files[0];
  const address =
    version && file && file.address
      ? `https://radintechco.ir/echolab/public/storage/${file.address}.${file.extension}`
      : null;

  function handleButtonClick() {
    setValue(true);
    setTimeout(() => {
      setValue(false);
    }, 3000);
  }

  function bookmarkAction() {
    setIsLoading(true); // Set isLoading to true when the request is initiated
    https
      .post(`bookmark/action/${props.id}`)
      .then(() => {
        handleButtonClick();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Set isLoading to false when the request is completed
      });
  }

  return (
    <IsLogginContext.Provider
      value={{ value: isLogginModal, setValue: setIsLogginModal }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className={Styles.container}
      >
        <div key={props.key} className={Styles.cardImage}>
          {address ? (
            <img src={address} alt="Image Alt Text" />
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
                {isLoading ? ( // Show loader if isLoading is true
                  "Loading..."
                ) : props.isBookmark === 1 ? (
                  <TickIcon />
                ) : (
                  <Plus />
                )}
              </div>
            </div>
            <Link className={Styles.open} href={`${props.route}`}>
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
    </IsLogginContext.Provider>
  );
}
