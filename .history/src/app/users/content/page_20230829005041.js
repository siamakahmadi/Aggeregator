'use client'
import { useContext } from 'react'
import styles from './style.module.scss'
import Btn from '../Components/Btn/index'
import CardLayout from '../Components/HomeListLayout/index'
import Card from '../Components/Card/index'
import ThemeContext from '../Api/context/ThemeContext'
import RightFlash from '../Assets/svg/RighFlash'
import Tag from '../Assets/svg/tag'
import Version from '../Assets/svg/version'

export default  function Home() {
  const theme = useContext(ThemeContext)
  
  return (
    // theme === 'light' ? Styles.navLight : Styles.navDark
    <main className={ theme === 'light' ?  styles.contentDetail : styles.contentDetailDark}>
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
                  <RightFlash/>
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
                <Tag/>
              </div>
              <div className={styles.text}>
                display
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <Tag/>
              </div>
              <div className={styles.text}>
                display
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <Tag/>
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
            <Version/>
          </div>
          <div className={styles.title}>
            Version 1.0
          </div>
        </div>
        <div className={styles.figmaFile}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 2H15.5C15.9596 2 16.4148 2.09053 16.8394 2.26642C17.264 2.44231 17.6499 2.70012 17.9749 3.02513C18.2999 3.35013 18.5577 3.73597 18.7336 4.16061C18.9095 4.58525 19 5.04037 19 5.5C19 5.95963 18.9095 6.41475 18.7336 6.83939C18.5577 7.26403 18.2999 7.64987 17.9749 7.97487C17.6499 8.29988 17.264 8.55769 16.8394 8.73358C16.4148 8.90947 15.9596 9 15.5 9H12V2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 12.5C12 12.0404 12.0905 11.5852 12.2664 11.1606C12.4423 10.736 12.7001 10.3501 13.0251 10.0251C13.3501 9.70012 13.736 9.44231 14.1606 9.26642C14.5852 9.09053 15.0404 9 15.5 9C15.9596 9 16.4148 9.09053 16.8394 9.26642C17.264 9.44231 17.6499 9.70012 17.9749 10.0251C18.2999 10.3501 18.5577 10.736 18.7336 11.1606C18.9095 11.5852 19 12.0404 19 12.5C19 12.9596 18.9095 13.4148 18.7336 13.8394C18.5577 14.264 18.2999 14.6499 17.9749 14.9749C17.6499 15.2999 17.264 15.5577 16.8394 15.7336C16.4148 15.9095 15.9596 16 15.5 16C15.0404 16 14.5852 15.9095 14.1606 15.7336C13.736 15.5577 13.3501 15.2999 13.0251 14.9749C12.7001 14.6499 12.4423 14.264 12.2664 13.8394C12.0905 13.4148 12 12.9596 12 12.5V12.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V19.5C12 20.4283 11.6313 21.3185 10.9749 21.9749C10.3185 22.6313 9.42826 23 8.5 23C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66797 10.667L9.33464 8.00033L6.66797 5.33366" stroke="#8F8F8F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
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
