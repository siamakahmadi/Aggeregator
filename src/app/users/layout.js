"use client";
import "../globals.css";
import { useState, useLayoutEffect, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToastContext from "./Api/context/ToastContext";
import IsBookmarkModalLogin from "./Api/context/IsBookmarkModalLogin";
import ThemeContext from "./Api/context/ThemeContext";
import HeaderContent from "./Api/context/HeaderContent";
import BookmarkToast from "./Components/BookmarkToast";
import Nav from "./Components/Navbar/index";
import IsLoggin from "./Api/context/UserContext";
import styles from "./Assets/main.module.scss";
import Cookies from "universal-cookie";

export default function RootLayout({ children }) {
  const cookies = new Cookies();

  useEffect(() => {
    const userCookieValue = cookies.get("userLogin");

    // Check if userCookieValue is undefined or null
    if (!userCookieValue) {
      // Set the cookie only if userCookieValue is not defined
      cookies.set(
        "userLogin",
        {
          isLoggin: false,
          userToken: null,
          userEmail: null,
          userId: null,
        },
        {
          path: "/",
          expires: new Date(Date.now() + 8000000),
        }
      );
    }
  }, [cookies]);

  const [toast, setToast] = useState();
  const [isLight, setIsLight] = useState("");
  const [userData, setUserData] = useState("");
  const [headerContext, setHeaderContext] = useState("");
  const [isBookmarkLoginModal, setIsBookmarkLoginModal] = useState();

  useLayoutEffect(() => {
    const storedData = window.localStorage.getItem("isLight?");
    setIsLight(storedData);
  }, []);

  useLayoutEffect(() => {
    window.localStorage.setItem("isLight?", isLight);
  }, [isLight]);

  return (
    <ThemeContext.Provider value={isLight}>
      <ToastContext.Provider value={{ value: toast, setValue: setToast }}>
        <IsBookmarkModalLogin.Provider
          value={{
            isBookmarkLoginModal: isBookmarkLoginModal,
            setIsBookmarkLoginModal: setIsBookmarkLoginModal,
          }}
        >
          <IsLoggin.Provider value={userData}>
            <html lang="en">
              <body
                className={
                  isLight === "light"
                    ? styles.lightBackground
                    : styles.darkBackground
                }
              >
                <HeaderContent.Provider value={headerContext}>
                  <Nav
                    setHeaderContext={setHeaderContext}
                    isLight={isLight}
                    setIsLight={setIsLight}
                    userData={userData}
                    setUserData={setUserData}
                  />
                  <div className={styles.containerPadding}>{children}</div>
                </HeaderContent.Provider>
                <AnimatePresence>
                  {toast && (
                    <motion.div
                      initial={{ opacity: 0, transition: "easeIn" }}
                      animate={{ opacity: 1, transition: "easeIn" }}
                      exit={{ opacity: 0, transition: "easeIn" }}
                    >
                      <BookmarkToast />
                    </motion.div>
                  )}
                </AnimatePresence>
              </body>
            </html>
          </IsLoggin.Provider>
        </IsBookmarkModalLogin.Provider>
      </ToastContext.Provider>
    </ThemeContext.Provider>
  );
}
