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
import IsBookmarkModalLogin from "../../Api/context/IsBookmarkModalLogin";
import SyncLoader from "react-spinners/SyncLoader";

export default function Index(props) {
  const cookie = new Cookies();
  const https = new Https();
  const theme = useContext(ThemeContext);

  const { value, setValue } = useContext(ToastContext);

  const { isBookmarkLoginModal, setIsBookmarkLoginModal } =
    useContext(IsBookmarkModalLogin);

    console.log(isBookmarkLoginModal)

  const [isLoading, setIsLoading] = useState(false);
  const [isBookmark, setIsBookmark] = useState(props.isBookmark);
  const [userInfo, setUserInfo] = useState(null); // Ensure initial state is null

  useEffect(() => {
    const userData = cookie.get("userLogin");
    setUserInfo(userData ? userData.isLoggin : false); // Handle case where userData might be undefined
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
    if (!userInfo) {
      setIsBookmarkLoginModal(true); // Show modal if user is not logged in
      return;
    }

    setIsLoading(true); // Set isLoading to true when the request is initiated
    https
      .post(`bookmark/action/${props.id}`)
      .then(() => {
        handleButtonClick();
        setIsBookmark((prev) => !prev); // Toggle bookmark state
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Set isLoading to false when the request is completed
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
          <div className={Styles.add}>
            <div
              className={isBookmark ? Styles.isBookmark : ""}
              onClick={bookmarkAction}
            >
              {isLoading ? (
                <SyncLoader
                  color={theme === "dark" ? "#fff" : "#1A2130"}
                  size={4}
                />
              ) : isBookmark ? (
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
  );
}
