"use client";
import { useContext, useState, useLayoutEffect } from "react";
import Slider from "react-slick";
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
import Version from "../../Assets/svg/version";
import Figma from "../../Assets/svg/figma";

export default function Page({ params }) {
  const https = new Https();
  const theme = useContext(ThemeContext);
  const [content, setcontent] = useState();
  const [relatedPosts, setRelatedPosts] = useState();
  const [pageLoading, setPageLoading] = useState([]);

  const versions = content && content.versions;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useLayoutEffect(() => {
    https
      .get(`user/post/${params.id}/show`)
      .then((Response) => {
        setcontent(Response.data.data.post_info),
          setPageLoading(Response.data.message),
          setRelatedPosts(Response.data.data.related_posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                <div className={styles.saveBtn}>
                  <Btn type="primary" link={content.website} title="Save">
                    <RightFlash />
                  </Btn>
                </div>
              </div>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.itemsList}>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <Tag />
                  </div>
                  <div className={styles.text}>display</div>
                </div>

                <div className={styles.item}>
                  <div className={styles.icon}>
                    <Tag />
                  </div>
                  <div className={styles.text}>display</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.versionDetails}>
            <div className={styles.version}>
              <div className={styles.icon}>
                <Version />
              </div>
            </div>
            <div className={styles.figmaFile}>
              <Figma />
            </div>
          </div>
          <div className={styles.imageContainer}>
            {versions && (
              <Slider {...sliderSettings}>
                {versions.map((version) => (
                  <span key={version.id}>
                    {version.files &&
                      version.files.map((file) => (
                        <div>
                          <img
                            key={file.id}
                            src={`https://radintechco.ir/echolab/public/storage/${file.address}.${file.extension}`}
                            alt={file.original_name}
                          />
                        </div>
                      ))}
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className={styles.details}>
            <div className={styles.avilable}>{content.anchor_website}</div>
            <div className={styles.explore}>
              <Btn type="primary" hasIcon={true} title="Explore">
                <RightFlash />
              </Btn>
            </div>
          </div>
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
