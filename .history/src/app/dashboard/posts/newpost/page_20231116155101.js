// Import necessary modules and components
"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import PageHeader from "../../components/PageHeader";
import Btn from "../../components/Btn/index";
import Input from "../../components/Input/index";
import InputContainer from "../../components/InputContainer/index";
import CheckBox from "../../components/CheckBox";
import DescriptionInput from "../../components/DescriptionInput";
import ImageUploader from "../../components/ImageUploader";
import Https from "../../../../../Axios/Https";
import DropDown from "../../components/DropDown/index";
import { toast } from 'react-toastify'; // Import toast for showing error messages

export default function NewPost() {
  const [formState, setFormState] = useState({});
  const [category, setCategory] = useState({});
  const [stack, setStack] = useState({});
  const [typeFace, setTypeFace] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const https = new Https();

  // Function to handle file change
  const handleFileChange = (event) => {
    const file = event.target.files;
    setSelectedFile(file);
  };

  // Fetch categories on component mount
  useEffect(() => {
    https.get("admin/category?type=Tags")
      .then((response) => setCategory(response.data))
      .catch((error) => toast(`Unable to fetch categories: ${error.message}`));
  }, []);

  useEffect(() => {
    https.get("admin/category?type=Stack")
      .then((response) => setStack(response.data))
      .catch((error) => toast(`Unable to fetch categories: ${error.message}`));
  }, []);

  useEffect(() => {
    https.get("admin/category?type=Type Face")
      .then((response) => setTypeFace(response.data))
      .catch((error) => toast(`Unable to fetch categories: ${error.message}`));
  }, []);

  // Function to handle form field changes
  const handleChange = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);

    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if required fields are filled out
    if (!formState.post_title || !formState.description) {
      console.error("Required fields are empty");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    // Append other form data fields
    for (const key in formState) {
      formData.append(key, formState[key]);
    }

    https.post("admin/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log("File uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {/* Page Header */}
        <PageHeader
          title="New Post"
          description="View your team’s trades and transactions."
        >
          {/* Buttons */}
          <div className={styles.btns}>
            <Btn hasIcon={true}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your SVG Path */}
              </svg>
            </Btn>
            <Btn title="Draft" />
            <Btn title="Publish" submitType="submit" hasIcon={true} type="primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your SVG Path */}
              </svg>
            </Btn>
          </div>
        </PageHeader>

        {/* Form Inputs */}
        <div className={styles.Inputs}>
          {/* Featured Section */}
          <InputContainer title="Featured">
            <div className={styles.checkBtn}>
              <CheckBox
                name="Featured"
                value={formState.Featured}
                onChange={handleChange}
                title="Select as Featured post"
              />
            </div>
            <Input
              name="priority"
              value={formState.priority}
              onChange={handleChange}
              placeholder="Enter a number"
              title="Priority"
            />
          </InputContainer>

          {/* Main Info Section */}
          <InputContainer
            title="Main info"
            description="Update your photo and personal details here."
          >
            <Input
              name="post_title"
              value={formState.post_title}
              onChange={handleChange}
              placeholder="Enter a title"
              title="Title"
            />
            <div className={styles.mt24}>
              <DescriptionInput
                name="description"
                value={formState.description}
                onChange={handleChange}
                placeholder="Enter a short description"
                title="Description"
              />
            </div>
          </InputContainer>

          {/* Category Info Section */}
          <InputContainer
            title="Category info"
            description="Select your category"
          >
            {/* Dropdowns and Inputs */}
            <select
              className={styles.dropDown}
              value={formState.tags}
              onChange={handleChange}
              name="category"
            >
              <option defaultChecked>Choose category</option>
              {category.message === "Category fetched" ? (
                <>
                  {category.data.map((item) => (
                    <option>{item.name}</option>
                  ))}
                </>
              ) : (
                <option defaultChecked>waiting...</option>
              )}
            </select>

            <select
                className={styles.dropDown}
                value={formState.tags}
                onChange={handleChange}
                name="category"
              >
                <option defaultChecked>Choose font</option>
                {typeFace.message === "Category fetched" ? (
                  <>
                    {typeFace.data.map((item) => (
                      <option>{item.name}</option>
                    ))}
                  </>
                ) : (
                  <option>wating...</option>
                )}
              </select>
          </InputContainer>

          {/* Version Info Section */}
          <InputContainer
            title="Version Info"
            description="type version detail complete"
          >
            {/* Version Inputs */}
          </InputContainer>

          {/* Album Section */}
          <InputContainer title="Album" description="Pic Gallery">
            {/* <ImageUploader
              onChange={handleFileChange}
              name="version_picture"
              value={formState.version_picture}
            /> */}
            <input
             onChange={handleFileChange}
             name="version_picture"
             value={formState.version_picture} 
             type={'file'}
             multiple
             />
          </InputContainer>
        </div>
      </form>
    </main>
  );
}
