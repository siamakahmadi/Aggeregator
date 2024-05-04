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
import { toast } from "react-toastify";

export default function NewPost() {
  const [formData, setFormData] = useState({
    tags: [],
    type_face: [],
  });
  console.log(formData);
  const [category, setCategory] = useState({});
  const [stack, setStack] = useState({});
  const [typeFace, setTypeFace] = useState({});
  const [selectedFile, setSelectedFile] = useState([]);

  const https = new Https();

  useEffect(() => {
    https
      .get("admin/category?type=Tags")
      .then((Response) => {
        setCategory(Response.data);
      })
      .catch((error) => {
        toast(`we cant fetched categories`);
      });
  }, []);

  useEffect(() => {
    https
      .get("admin/category?type=Stack")
      .then((Response) => {
        setStack(Response.data);
      }) 
      .catch((error) => {
        toast(`we cant fetched categories`);
      });
  }, []);

  useEffect(() => {
    https
      .get("admin/category?type=Type Face")
      .then((Response) => {
        setTypeFace(Response.data);
      })
      .catch((error) => {
        toast(`we cant fetched categories`);
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    // Check if the field is tags or type_face
    if (name === "tags" || name === "type_face") {
      // Extract the index from the field name, e.g., tags[0] -> 0
      const index = name.match(/\d+/);

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: {
          ...prevFormData[name],
          [index]: value,
        },
      }));
    } else {
      // For other fields, handle as usual
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  function handleFileChange(event) {
    const files = event.target.files;
    setSelectedFile(files);

    // Optionally, if you want to display the file names in the UI
    const fileNames = Array.from(files).map((file) => file.name);
    setFormData((prevFormData) => ({
      ...prevFormData,
      version_picture: fileNames, // Adjust the key based on your backend expectations
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedFile.length === 0) {
      console.error("No files selected");
      return;
    }

    const formDataToSubmit = new FormData();

    // Append each file to formData
    for (let i = 0; i < selectedFile.length; i++) {
      formDataToSubmit.append(`version_picture[${i}]`, selectedFile[i]);
    }

    // Append other form data
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    https
      .post("admin/post", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Files uploaded successfully:", data);
      })
      .catch((error) => {
        console.error("Error uploading files:", error);
      });
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <PageHeader
          title="New Post"
          description="View your team’s trades and transactions."
        >
          <div className={styles.btns}>
            <Btn title="Draft" />
            <Btn
              title="Publish"
              submitType="submit"
              hasIcon={true}
              type="primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0013 4.16602V15.8327M4.16797 9.99935H15.8346"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Btn>
          </div>
        </PageHeader>

        <div className={styles.Inputs}>
          <InputContainer title="Featured">
            <div className={styles.checkBtn}>
              <CheckBox
                name="Featured"
                value={formData.Featured}
                onChange={handleChange}
                title="Select as Featured post"
              />
            </div>
            <Input
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              placeholder="Enter a number"
              title="Priority"
            />
          </InputContainer>

          <InputContainer
            title="Main info"
            description="Update your photo and personal details here."
          >
            <Input
              name="post_title"
              value={formData.post_title}
              onChange={handleChange}
              placeholder="Enter a title"
              title="Title"
            />
            <div className={styles.mt24}>
              <DescriptionInput
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter a short description"
                title="Description"
              />
            </div>
          </InputContainer>

          <InputContainer
            title="Category info"
            description="Select your category"
          >
            <select
              className={styles.dropDown}
              value={formData.tags[0]} // Adjust the index as needed
              onChange={handleChange}
              name="tags[0]"
            >
              <option defaultChecked value="">
                Choose category
              </option>
              {category.message === "Category fetched" ? (
                <>
                  {category.data.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </>
              ) : (
                <option>waiting ...</option>
              )}
            </select>

            <div className={styles.mb24}></div>
            <div className={styles.mb24}>
              <select
                className={styles.dropDown}
                value={formData.type_face[0]}
                onChange={handleChange}
                name="type_face[0]"
              >
                <option value="" defaultChecked>
                  Choose font
                </option>
                {typeFace.message === "Category fetched" ? (
                  <>
                    {typeFace.data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <option>waiting ...</option>
                )}
              </select>
            </div>
            <div className={styles.mb24}>
              <Input
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter full website link"
                title="Website"
              />
            </div>
            <div className={styles.mt24}>
              <Input
                name="permlink"
                value={formData.permlink}
                onChange={handleChange}
                placeholder="Enter full permlink link"
                title="Enter full permlink website"
              />
            </div>
          </InputContainer>

          <InputContainer
            title="Version Info"
            description="type version detail complete"
          >
            <Input
              name="version_title"
              value={formData.version_title}
              onChange={handleChange}
              placeholder="Enter Version"
              title="Version Title"
            />
            <Input
              name="version_number"
              value={formData.version_number}
              onChange={handleChange}
              placeholder="Enter Version"
              title="Version Number"
            />
            <Input
              name="version_date_added"
              value={formData.version_date_added}
              onChange={handleChange}
              placeholder="Version Date Added"
              title="Version Date Added"
            />
          </InputContainer>

          <InputContainer title="Alboum" description="Pic Gallery">
            <ImageUploader name="version_picture" onChange={handleFileChange} />
          </InputContainer>
        </div>
      </form>
    </main>
  );
}
