"use client";
import styles from "./assets/main.module.scss";
import Nav from "./components/nav/index";
import Login from "./login/page";
import { useState, useLayoutEffect } from "react";
import Cookies from "universal-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  const cookies = new Cookies();

  const [isLoggin, setIsLoggin] = useState(true);

  useLayoutEffect(() => {
    const cookieData = cookies.get("isloggin");
    setIsLoggin(cookieData);
  }, []);

  return (
    <html lang="en">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <body className={styles.mainBackground}>
        x
        {isLoggin ? (
          <div>
            <Nav />
            <div className={styles.containerPadding}>{children}</div>
          </div>
        ) : (
          <Login />
        )}
      </body>
    </html>
  );
}