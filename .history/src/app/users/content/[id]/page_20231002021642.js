"use client";
import { useContext, useState, useEffect } from "react";
import styles from "../style.module.scss";
import Btn from "../../Components/Btn/index";
import CardLayout from "../../Components/HomeListLayout/index";
import Card from "../../Components/Card/index";
import ThemeContext from "../../Api/context/ThemeContext";

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
  console.log(content);
  const [pageLoading, setPageLoading] = useState([]);

  useEffect(() => {
    https
      .get(`user/post/${params.id}/show`)
      .then((Response) => {
        setcontent(Response.data.data), setPageLoading(Response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const relatedPosts = content.related_posts ? (
     : (
    <>
      <div>Loading</div>
    </>
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
                <div className={styles.title}>{content.post_info.title}</div>
                <div className={styles.describe}>
                  {content.post_info.description}
                </div>
              </div>
              <div className={styles.toolBar}>
                <div className={styles.exploreBtn}>
                  <Btn
                    type="primary"
                    hasIcon={true}
                    link={content.post_info.website}
                    title="Explore Site"
                  >
                    <RightFlash />
                  </Btn>
                </div>
                <div className={styles.saveBtn}>
                  <Btn title="Save" />
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
            <img src="https://cdn.dribbble.com/userupload/8801204/file/original-a09d105afeb2c1843c5fd97f07b1928d.png?resize=1024x768" />
          </div>
          <div className={styles.details}>
            <div className={styles.avilable}>
              {content.post_info.anchor_website}
            </div>
            <div className={styles.explore}>
              <Btn type="primary" hasIcon={true} title="Explore">
                <RightFlash />
              </Btn>
            </div>
          </div>
          <div className={styles.suggestPosts}>
            <div className={styles.title}>Related works</div>
            <div className={styles.postlist}>
              <CardLayout>
                {content.related_posts === null ? (
                  <div> Related Posts Not Found</div>
                ) : (
                  <Card
                    title="hi"
                    src="https://cdn.dribbble.com/userupload/4269145/file/original-c533e5366daed052e3c3236c085acbc7.png?resize=1024x768"
                  />
                )}
              </CardLayout>
            </div>
          </div>
        </main>
      ) : (
        <div>wating...</div>
      )}
    </>
  );
}
