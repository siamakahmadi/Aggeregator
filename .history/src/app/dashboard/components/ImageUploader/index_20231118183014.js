import React from "react";
import Styles from "./style.module.scss";

export default function Index(props) {


  const ImageUploader = ({ name, onChange }) => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      onChange(file);
  
      // Display image preview
      const preview = document.getElementById(`${name}-preview`);
      if (file && preview) {
        const imageUrl = URL.createObjectURL(file);
        preview.src = imageUrl;
      }
    };

  return (
    <div className={Styles.imageContainer}>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type="file"
        multiple
        accept="image/*"
      />
    </div>
  );
}
