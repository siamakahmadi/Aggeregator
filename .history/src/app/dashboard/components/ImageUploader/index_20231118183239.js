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
      <div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/*"  // Accept only image files
          onChange={handleFileChange}
        />
        <label htmlFor={name}>Choose Image</label>
  
        {/* Display image preview */}
        <img id={`${name}-preview`} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
      </div>
    );
  };