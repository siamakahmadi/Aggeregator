import React from "react";
import Styles from "./style.module.scss";

export default function Index(props) {
  
  return (
    <div className={Styles.imageContainer}>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type="file"
        id="fileInput"
        multiple
        accept="image/*"
      />
    </div>
  );
}
