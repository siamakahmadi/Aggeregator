"use client";
import { useState, useEffect,useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import PageHeader from "../../components/PageHeader/index";
import Https from "../../../../../Axios/Https";
import CloseIcon from "../../assets/svg/closeIcon";
import Input from "../../components/Input/index";
import { toast } from "react-toastify";
import DescriptionInput from "../../components/DescriptionInput";

import DragIcon from "../../assets/svg/drag";
import DeleteIcon from "../../assets/svg/deleteIcon";

export default function Page() {
  const [addTag, setAddTag] = useState(false);
  const [addStack, setAddStack] = useState(false);
  const [typeFace, setTypeFace] = useState(false);

  const [category, setCategory] = useState({});
  const [stack, setStack] = useState({});
  const [font, setFont] = useState({});

  const [formData, setFormData] = useState({});

  const https = new Https();

  useLayoutEffect(() => {
    https
      .get("admin/category?type=Tags")
      .then((Response) => {
        setCategory(Response.data);
        toast(`category successfull load`);
      })
      .catch((error) => {
        toast(`we cant featched categories`);
      });
  }, []);

  useEffect(() => {
    https
      .get("admin/category?type=Stack")
      .then((Response) => {
        setStack(Response.data);
      })
      .catch((error) => {
        toast(`we cant featched categories`);
      });
  }, []);

  useEffect(() => {
    https
      .get("admin/category?type=Type Face")
      .then((Response) => {
        setFont(Response.data);
      })
      .catch((error) => {
        toast(`we cant featched Type Face`);
      });
  }, []);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    https
      .post("admin/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((Response) => {
        toast.success("Category Sucessfully created");
      })
      .catch((error) => {
        toast.error(`Create is faild ${error}`);
      });
  }

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    setFormData.icon(file);
    const formData = new FormData();
    formData.append("image", file);
  };

  function deleteItem(id) {
    https
      .delete(`admin/category/${id}`)
      .then((Response) => {
        toast.success("Category Sucessfully deleted");
      })
      .catch((error) => {
        toast.error(`Delete is faild ${error}`);
      });
  }

  return (
    <>
      <div>
        <PageHeader
          title="Categeries"
          description="View your team’s trades and transactions."
        />
        <div className={styles.itemsContainer}>
          <div className={styles.header}>
            <div className={styles.title}>
              Tags
              <div></div>
            </div>
            <div className={styles.description}>
              Update your photo and personal details here.
            </div>
          </div>
          <div className={styles.container}>
            {/* items */}

            <div className={styles.items}>
              {category.message === "Category fetched" ? (
                <>
                  {category.data.map((item) => (
                    <div key={item.id} className={styles.item}>
                      <div className={styles.content}>
                        <div className={styles.icon}>
                          <DragIcon />
                        </div>
                        <div className={styles.title}>{item.name}</div>
                      </div>
                      <div className={styles.toolbar}>
                        {/* <a className={styles.detailBtn}>Detail</a> */}
                        <div
                          className={styles.icon}
                          onClick={() => deleteItem(item.id)}
                        >
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div>wating...</div>
              )}
            </div>

            {/* items */}
            <div className={styles.addBtnContainer}>
              <a
                className={styles.btn}
                onClick={() => (addTag ? setAddTag(false) : setAddTag(true))}
              >
                Add New
              </a>
            </div>
          </div>
        </div>

        <div className={styles.itemsContainer}>
          <div className={styles.header}>
            <div className={styles.title}>Stack</div>
            <div className={styles.description}>
              Update your photo and personal details here.
            </div>
          </div>
          <div className={styles.container}>
            {/* items */}

            <div className={styles.items}>
              {category.message === "Category fetched" ? (
                <>
                  {stack.data.map((item) => (
                    <div key={item.id} className={styles.item}>
                      <div className={styles.content}>
                        <div className={styles.icon}>
                          <DragIcon />
                        </div>
                        <div className={styles.title}>{item.name}</div>
                      </div>
                      <div className={styles.toolbar}>
                        {/* <a className={styles.detailBtn}>Detail</a> */}
                        <div
                          className={styles.icon}
                          onClick={() => deleteItem(item.id)}
                        >
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div>wating...</div>
              )}
            </div>

            {/* items */}
            <div
              className={styles.addBtnContainer}
              onClick={() =>
                addStack ? setAddStack(false) : setAddStack(true)
              }
            >
              <a
                className={styles.btn}
                onClick={() => (addTag ? setAddTag(false) : setAddTag(true))}
              >
                Add New
              </a>
            </div>
          </div>
        </div>

        <div className={styles.itemsContainer}>
          <div className={styles.header}>
            <div className={styles.title}>Type Face</div>
            <div className={styles.description}>
              Update your photo and personal details here.
            </div>
          </div>
          <div className={styles.container}>
            {/* items */}

            <div className={styles.items}>
              {font.message === "Category fetched" ? (
                <>
                  {font.data.map((item) => (
                    <div key={item.id} className={styles.item}>
                      <div className={styles.content}>
                        <div className={styles.icon}>
                          <DragIcon />
                        </div>
                        <div className={styles.title}>{item.name}</div>
                      </div>
                      <div className={styles.toolbar}>
                        {/* <a className={styles.detailBtn}>Detail</a> */}
                        <div
                          className={styles.icon}
                          onClick={() => deleteItem(item.id)}
                        >
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div>wating...</div>
              )}
            </div>

            {/* items */}
            <div
              className={styles.addBtnContainer}
              onClick={() =>
                typeFace ? setTypeFace(false) : setTypeFace(true)
              }
            >
              <a
                className={styles.btn}
                onClick={() => (addTag ? setAddTag(false) : setAddTag(true))}
              >
                Add New
              </a>
            </div>
          </div>
        </div>
      </div>
      {addTag ? (
        <>
          <div className={styles.modal}>
            <div className={styles.container}>
              <div className={styles.header}>
                <div>Add New Tag</div>
                <div
                  className={styles.closeIcon}
                  onClick={() => (addTag ? setAddTag(false) : setAddTag(true))}
                >
                  <CloseIcon />
                </div>
              </div>
              <div className={styles.body}>
                <form onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Add subject categories"
                    title="Menu Title"
                  />
                  <div className={styles.mt15}>
                    <Input
                      name="page_title"
                      value={formData.page_title}
                      onChange={handleChange}
                      placeholder="Add page title "
                      title="Page title"
                    />
                  </div>
                  <div className={styles.mt15}>
                    <select
                      className={styles.dropDown}
                      value={formData.type}
                      onChange={handleChange}
                      name="type"
                    >
                      <option defaultChecked>Tags</option>
                      <option>Type Face</option>
                      <option>Stack</option>
                    </select>
                  </div>
                  <div className={styles.mt15}>
                    <DescriptionInput
                      title="Page Description"
                      name="page_description"
                      value={formData.page_description}
                      onChange={handleChange}
                      placeholder="pageTitle"
                    />
                  </div>
                  <div className={styles.mt15}>
                    <Input
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      title="Meta Title"
                      placeholder="Meta Title"
                    />
                  </div>
                  <div className={styles.mt15}>
                    <DescriptionInput
                      title="Meta Description"
                      name="meta_description"
                      value={formData.meta_description}
                      onChange={handleChange}
                      placeholder="Meta Description"
                    />
                  </div>
                  <div className={styles.mt15}>
                    <input type="file" />
                  </div>
                  <div className={styles.mt15}>
                    <div className={styles.buttons}>
                      <div
                        className={styles.discardBtn}
                        onClick={() =>
                          addTag ? setAddTag(false) : setAddTag(true)
                        }
                      >
                        Discard
                      </div>
                      <button type="submit" className={styles.saveBtn}>
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
