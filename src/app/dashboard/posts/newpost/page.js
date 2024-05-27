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
import SyncLoader from "react-spinners/SyncLoader";

export default function NewPost() {
  const [formData, setFormData] = useState({
    tags: [],
    type_face: [],
    version_picture: [],
  });
  const [category, setCategory] = useState({});
  const [stack, setStack] = useState({});
  const [typeFace, setTypeFace] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrors, setIsErrors] = useState([]);
  console.log(isErrors);

  const https = new Https();

  useEffect(() => {
    https
      .get("admin/category?type=Tags")
      .then((Response) => {
        setCategory(Response.data);
      })
      .catch((error) => {
        toast.error("We can't fetch categories.");
      });
  }, []);

  useEffect(() => {
    https
      .get("admin/category?type=Stack")
      .then((Response) => {
        setStack(Response.data);
      })
      .catch((error) => {
        toast.error("We can't fetch categories.");
      });
  }, []);

  useEffect(() => {
    https
      .get("admin/category?type=Type Face")
      .then((Response) => {
        setTypeFace(Response.data);
      })
      .catch((error) => {
        toast.error("We can't fetch categories.");
      });
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    const nameParts = name.split("[");

    if (nameParts.length > 1) {
      const fieldName = nameParts[0];
      const index = parseInt(nameParts[1].split("]")[0], 10);

      setFormData((prevFormData) => {
        const updatedFieldArray = [...prevFormData[fieldName]];
        updatedFieldArray[index] = value;
        return {
          ...prevFormData,
          [fieldName]: updatedFieldArray,
        };
      });
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  }

  function handleFileChange(event) {
    const files = event.target.files;
    const newFiles = Array.from(files);
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...newFiles,
    ]);

    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevImagePreviews) => [
          ...prevImagePreviews,
          { name: file.name, dataUrl: reader.result },
        ]);
      };
      reader.readAsDataURL(file);
    });

    setFormData((prevFormData) => ({
      ...prevFormData,
      version_picture: [
        ...prevFormData.version_picture,
        ...newFiles.map((file) => file.name),
      ],
    }));
  }

  function handleRemoveImage(index) {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((_, i) => i !== index)
    );
    setImagePreviews((prevImagePreviews) =>
      prevImagePreviews.filter((_, i) => i !== index)
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      version_picture: prevFormData.version_picture.filter(
        (_, i) => i !== index
      ),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    if (selectedFiles.length === 0) {
      toast.error("No files selected");
      setIsLoading(false);
      return;
    }

    const formDataToSubmit = new FormData();

    selectedFiles.forEach((file, index) => {
      formDataToSubmit.append(`version_picture[${index}]`, file);
    });

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formDataToSubmit.append(`${key}[${index}]`, item);
        });
      } else {
        formDataToSubmit.append(key, value);
      }
    });

    https
      .post("admin/post", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        toast.success("Files uploaded successfully");
        setIsLoading(false); // Hide loader on success
      })
      .catch((error) => {
        setIsErrors(error.response.data.data);
        setIsLoading(false); // Hide loader on error
      });
  }

  return (
    <main>
      {isLoading && (
        <div className={styles.loaderContainer}>
          Post Uploading
          <SyncLoader color={"#36D7B7"} loading={isLoading} />
        </div>
      )}

      {Object.keys(isErrors).length === 0 ? (
        <div></div>
      ) : (
        <div className={styles.errorContainer}>
          {Object.entries(isErrors).map(([key, errors]) => (
            <div key={key}>
              {errors.map((error, index) => (
                <div  key={index}>
                  <div className={styles.errorMessage}>{error}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

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
              value={formData.tags[0] || ""}
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
                value={formData.type_face[0] || ""}
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
                value={formData.website || ""}
                onChange={handleChange}
                placeholder="Enter full website link"
                title="Website"
              />
            </div>
            <div className={styles.mt24}>
              <Input
                name="permlink"
                value={formData.permlink || ""}
                onChange={handleChange}
                placeholder="Enter full permlink link"
                title="Enter full permlink website"
              />
            </div>
          </InputContainer>

          <InputContainer
            title="Version Info"
            description="Type version detail complete"
          >
            <Input
              name="version_title"
              value={formData.version_title || ""}
              onChange={handleChange}
              placeholder="Enter Version"
              title="Version Title"
            />
            <Input
              name="version_number"
              value={formData.version_number || ""}
              onChange={handleChange}
              placeholder="Enter Version"
              title="Version Number"
            />
            <Input
              name="version_date_added"
              value={formData.version_date_added || ""}
              onChange={handleChange}
              placeholder="Version Date Added"
              title="Version Date Added"
            />
          </InputContainer>

          <InputContainer title="Album" description="Pic Gallery">
            <ImageUploader name="version_picture" onChange={handleFileChange} />
          </InputContainer>

          <div className={styles.previewContainer}>
            {imagePreviews.map((image, index) => (
              <div key={index} className={styles.previewImage}>
                <img src={image.dataUrl} alt={`Preview ${index}`} />
                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => handleRemoveImage(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0,0,256,256"
                  >
                    <g fill="#ffffff">
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </main>
  );
}
