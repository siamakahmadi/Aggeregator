"use client";
import { useContext, useState, useEffect } from "react";
import Slider from "react-slick";
import SyncLoader from "react-spinners/SyncLoader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../style.module.scss";
import Btn from "../../Components/Btn/index";
import CardLayout from "../../Components/HomeListLayout/index";
import Card from "../../Components/Card/index";
import ThemeContext from "../../Api/context/ThemeContext";
import Loading from "../../Components/Loading/index";
import Https from "../../Api/Https";
// Icon List
import RightFlash from "../../Assets/svg/RighFlash";
import Tag from "../../Assets/svg/tag";
import Typefaces from "../../Assets/svg/Typefaces";
import Version from "../../Assets/svg/version";
import Figma from "../../Assets/svg/figma";

import ToastContext from "../../Api/context/ToastContext";

export default function Page({ params }) {
  const https = new Https();
  const theme = useContext(ThemeContext);
  const [content, setcontent] = useState();
  const [relatedPosts, setRelatedPosts] = useState();
  const [pageLoading, setPageLoading] = useState([]);
  const [saveBtnTheme, setSaveBtnTheme] = useState();
  const { value, setValue } = useContext(ToastContext);

  const [loading, setLoading] = useState(false);
  const versions = content && content.versions;

  const sliderSettings = {
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  useEffect(() => {
    https
      .get(`user/post/${params.id}/show`)
      .then((Response) => {
        setcontent(Response.data.data.post_info),
          setPageLoading(Response.data.message),
          setRelatedPosts(Response.data.data.related_posts);
        setSaveBtnTheme(Response.data.data.post_info.liked);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const handleButtonClick = () => {
    setValue(true);
    setInterval(() => {
      setValue(false);
    }, 3000);
  };

  function savePostHandleRequest() {
    // Set isLoading to true when the request is initiated
    setLoading(true);

    https
      .post(`bookmark/action/${params.id}`)
      .then((response) => {
        // After the save request is successful, fetch the initial data again
        return https.get(`user/post/${params.id}/show`);
      })
      .then((response) => {
        // Update the state with the latest data
        setSaveBtnTheme(response.data.data.post_info.liked);
        // Optionally, perform any other actions after updating the state
        handleButtonClick();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // Set isLoading to false when the request is completed (success or failure)
        setLoading(false);
      });
  }

  const relatedPostsList = relatedPosts ? (
    relatedPosts.map((item) => <Card key={item.index} title={item.title} />)
  ) : (
    <div>Related posts Not founds</div>
  );

  return (
    <>
      {pageLoading === "Post fetched" ? (
        <main
          className={
            theme === "light" ? styles.contentDetail : styles.contentDetailDark
          }
        >
          <div className={styles.header}>
            <div className={styles.leftSide}>
              <div className={styles.information}>
                <div className={styles.title}>{content.title}</div>
                <div className={styles.describe}>{content.description}</div>
              </div>
              <div className={styles.toolBar}>
                <div className={styles.exploreBtn}>
                  <Btn
                    type="primary"
                    hasIcon={true}
                    link={content.website}
                    title="Explore Site"
                  >
                    <RightFlash />
                  </Btn>
                </div>
                <div
                  className={styles.saveBtn}
                  onClick={() => savePostHandleRequest()}
                >
                  {saveBtnTheme === 1 ? (
                    <a className={styles.secondarySelected}>
                      {loading ? (
                        <SyncLoader color="#ffffff" size={6} />
                      ) : (
                        <div>Unsave</div>
                      )}
                    </a>
                  ) : (
                    <a
                      className={
                        theme === "dark"
                          ? styles.secondaryDark
                          : styles.secondary
                      }
                    >
                      {loading ? (
                        <SyncLoader color="#111111" size={6} />
                      ) : (
                        <div>Save</div>
                      )}
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.itemsList}>
                {content.categories.map((category) => (
                  <div key={category.id} className={styles.item}>
                    <div className={styles.icon}>
                      {category.type === "Tags" ? <Tag /> : <Typefaces />}
                    </div>
                    <div className={styles.text}>{category.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.versionDetails}>
            <div className={styles.version}>
              <div className={styles.icon}>
                <Version />
              </div>
              <div className={styles.title}>
                Version {content.versions[0].title}
              </div>
            </div>
            <div className={styles.figmaFile}>
              <Figma />
            </div>
          </div>
          <div className={styles.imageContainer}>
            {versions && (
              <div className={styles.Slider}>
                {versions.map((version) => (
                  <Slider key={version.id} {...sliderSettings}>
                    {version.files &&
                      version.files.map((file) => (
                        <img
                          key={file.id}
                          src={`https://radintechco.ir/echolab/public/storage/${file.address}.${file.extension}`}
                          alt={file.original_name}
                        />
                      ))}
                  </Slider>
                ))}
              </div>
            )}
          </div>
          {content.anchor_website && (
            <div className={styles.details}>
              <div className={styles.avilable}>{content.anchor_website}</div>
              <div className={styles.explore}>
                <Btn type="primary" hasIcon={true} title="Explore">
                  <RightFlash />
                </Btn>
              </div>
            </div>
          )}

          <div className={styles.suggestPosts}>
            <div className={styles.title}>Related works</div>
            <div className={styles.postlist}>
              <CardLayout>{relatedPostsList}</CardLayout>
            </div>
          </div>
        </main>
      ) : (
        <Loading title="Loading ... " />
      )}
    </>
  );
}
