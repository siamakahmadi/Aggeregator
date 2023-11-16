import { useState } from "react";
import Style from "./style.module.scss";
import React from "react";
import Arrow from "../../assets/svg/arrow";

export default function index(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);





  import { useState } from 'react';

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    // Add additional form data if needed

    // Make an AJAX request (you can use Axios, Fetch, or any other library)
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('File uploaded successfully:', data);
        // Handle the response as needed
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle errors
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;





  return (
    <div className={Style.dropDown}>
      <div className={Style.inputContainer}>
        <div className={Style.label}>label</div>
        <div
          className={Style.selected}
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          
          {!selectedItem ?   selectedItem.name : <div>select a option</div>}

          <div className={isOpen ? Style.arrowOpen : ""}>
            <Arrow />
          </div>
        </div>
      </div>
      <div className={isOpen ? Style.menu : Style.menuClsoe}>
        <ul className={Style.itemList}>
          <li
            onClick={() => selectedItem.push({ name: "item 3" })}
            className={Style.item}
          >
            test 1{console.log(selectedItem)}
          </li>
          <li
            onClick={() => selectedItem.push({ name: "item 2" })}
            className={Style.item}
          >
            test 2
          </li>
          <li
            onClick={() => selectedItem.push({ name: "item 4" })}
            className={Style.item}
          >
            test 3
          </li>
        </ul>
      </div>
    </div>
  );
}
