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
        multiple
        We talked about file uploader input and you know about that . know I ask something in you . Firts I want limit input with just image formats , and second I want show images privew uploaded with input 
      />
    </div>
  );
}
