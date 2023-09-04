'use client'
import { useContext,useState, useEffect } from 'react'
import styles from '../style.module.scss'
import Btn from '../../Components/Btn/index'
import CardLayout from '../../Components/HomeListLayout/index'
import Card from '../../Components/Card/index'
import ThemeContext from '../../Api/context/ThemeContext'

import Https from "../../Api/Https";

// Icon List
import RightFlash from '../../Assets/svg/RighFlash'
import Tag from '../../Assets/svg/tag'
import Version from '../../Assets/svg/version'
import Figma from '../../Assets/svg/figma'


export default function Page({ params }) {

  const theme = useContext(ThemeContext)
  const [content, setcontent] = useState([])
  const https = new Https();

  useEffect(() => {
    https.get(`user/post/${params}/show`).then(Response => {
      setcontent(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const contentData = content.message === "Post fetched" ?
  <>
   <div>hello</div>
   {content.map(item=>
   ))}
  </> : <div>wating...</div>



  return (
    // theme === 'light' ? Styles.navLight : Styles.navDark
    <main className={theme === 'light' ? styles.contentDetail : styles.contentDetailDark}>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <div className={styles.information}>
            <div className={styles.title}>
              Ultra
            </div>
            <div className={styles.describe}>
              Websites that give growing startups an unfair advantage.
            </div>
          </div>
          <div className={styles.toolBar}>
            <div className={styles.exploreBtn}>
              <Btn type="primary" hasIcon={true} title="Explore Site">
                <RightFlash />
              </Btn>
            </div>
            <div className={styles.saveBtn}>
              <Btn title="Save" />
            </div>
            {contentData}
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.itemsList}>

            <div className={styles.item}>
              <div className={styles.icon}>
                <Tag />
              </div>
              <div className={styles.text}>
                display
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <Tag />
              </div>
              <div className={styles.text}>
                display
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <Tag />
              </div>
              <div className={styles.text}>
                display
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.versionDetails}>
        <div className={styles.version}>
          <div className={styles.icon}>
            <Version />
          </div>
          <div className={styles.title}>
            Version 1.0
          </div>
        </div>
        <div className={styles.figmaFile}>
          <Figma />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src='https://cdn.dribbble.com/userupload/8801204/file/original-a09d105afeb2c1843c5fd97f07b1928d.png?resize=1024x768' />
      </div>
      <div className={styles.details}>
        <div className={styles.avilable}>
          Anchor is available
        </div>
        <div className={styles.explore}>
          <Btn type="primary" hasIcon={true} title="Explore">
            <RightFlash />
          </Btn>
        </div>
      </div>
      <div className={styles.suggestPosts}>
        <div className={styles.title}>
          Related works
        </div>
        <div className={styles.postlist}>
          <CardLayout>
            <Card title="hi" route="users/content" src="https://cdn.dribbble.com/userupload/8820022/file/original-305c94abf1c1957efabfb9373be9c0e2.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/8801204/file/original-a09d105afeb2c1843c5fd97f07b1928d.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/3349115/file/original-3d403a69ba1204ffae35cd6b6b5e39ca.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/8586347/file/original-f0d863b0f08bfbcbc63d433af6d87e55.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/3864697/file/original-42c4671255d0a8f554fc8e6a701ce0ad.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/users/6657271/screenshots/16718233/media/cde7ddea5b1145a2410ec3bf3d420bf4.png?resize=1000x750&vertical=center" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/4685428/file/original-fbb26aae96ef30c3dc88b77ac5c326d7.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/7202523/file/original-20ac238c1fe9a6ed0d1f045e4fe629fd.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/5784100/file/original-0c72a1d7b87d6eab0f12bf0964e9aa4f.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/6040927/file/original-4a867e640833081686316ab98fe638f2.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/4269145/file/original-c533e5366daed052e3c3236c085acbc7.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/6040927/file/original-4a867e640833081686316ab98fe638f2.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/4739859/file/original-83c6be137b43d2b0707846a40a07754d.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/5033170/file/original-b4fa00fa98b1440203c85824f89a8942.png?resize=1024x768" />
            <Card title="hi" src="https://cdn.dribbble.com/userupload/4269145/file/original-c533e5366daed052e3c3236c085acbc7.png?resize=1024x768" />
          </CardLayout>
        </div>
      </div>
    </main>
  )
}
