import React, { useContext } from "react";
import Styles from "./style.module.scss";
import ThemeContext from "../../Api/context/ThemeContext";
import CloseIcon from "../../Assets/svg/closeIcon";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Index(props) {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? Styles.moadl : Styles.moadlDark}>
      <motion.div
        className={Styles.modalContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className={Styles.modalHeader}>
          <div className={Styles.modalTitle}>
            <div className={Styles.text}>{props.title}</div>
          </div>
          {props.hasIcon ? (
            <div className={Styles.closeIcon} onClick={props.btnEvent}>
              <CloseIcon />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={Styles.modalContent}>{props.children}</div>
      </motion.div>
    </div>
  );
}
