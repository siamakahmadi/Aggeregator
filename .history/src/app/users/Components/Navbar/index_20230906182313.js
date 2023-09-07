
import { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import Styles from './style.module.scss'
import ThemeContext from '../../Api/context/ThemeContext'
import CategoryBtn from '../SidebarItem/CategoryBtn'
import Modal from '../ModalLayout/index'
import Btn from '../Btn/index'
import Input from '../Input/index'
import NavMenuLayout from '../NavMenuLayout/index'
import SadebarItem from '../SidebarItem/index'
import Logo from '../../Assets/Logo/logo'

// Icons
import DarkIcon from '../../Assets/svg/dark'
import LightIcon from '../../Assets/svg/light'
import CloseIcon from "../../Assets/svg/closeIcon";
import MenuIcon from '../../Assets/svg/menuIcon'
import ProfileIcon from '../../Assets/svg/profileIcon'
import BookmarkIocn from '../../Assets/svg/bookmarkIcon'

import Https from "../../Api/Https";

export default function Index(props) {
  const theme = useContext(ThemeContext)

  const [activeMenu, setActiveMenu] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)
  const [activeDisplayFilter, setActiveDisplayFilter] = useState(false)


  const [categoryItems, setCategoryItems] = useState([])

  const categoryFilter = categoryItems.data.filter(p=>)
  console.log(categoryItems.data)

  const https = new Https();

  const CategoryItemsList = categoryItems.message === "Category deleted" ?
    <>
      {categoryItems.data.map(item => (
        <SadebarItem title={item.name}>
          tt
        </SadebarItem>
      ))}
    </> : <div>wating...</div>


  const TypeFace = categoryItems.message === "Post fetched" ?
    <>
      {posts.data.map(item => (
        <div key={item.id}>Hello</div>
      ))}
    </> : <div>wating...</div>


  useEffect(() => {
    https.get('user/category/index').then(Response => {
      setCategoryItems(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  // function bookmarks() {
  //   https.delete(`admin/category/${id}`).then(
  //     Response => {
  //       console.log(Response)
  //     }
  //   ).catch(error => {
  //     console.log(error)
  //   })
  // }



  return (
    <>
      <div className={theme === 'light' ? Styles.navLight : Styles.navDark}>
        <div className={Styles.body}>
          <div className={Styles.container}>
            <div className={Styles.leftSide}>
              <div className={Styles.Logo}>
                <Logo />
              </div>
              <div className={Styles.menuBtns}>
                <div className={Styles.categoryBtn}>
                  <CategoryBtn title="All" event={() => activeFilter ? setActiveFilter(false) : setActiveFilter(true)} />
                  <>
                    {/* categories */}
                    {activeFilter ?
                      <NavMenuLayout>
                        <SadebarItem title="Bookmarks">
                          <div>
                            <BookmarkIocn />
                          </div>
                        </SadebarItem>
                        <SadebarItem title="All">
                          <div>
                            <BookmarkIocn />
                          </div>
                        </SadebarItem>
                        {CategoryItemsList}
                      </NavMenuLayout>
                      :
                      <></>
                    }
                  </>
                </div>
                <div className={Styles.categoryBtn}>
                  <CategoryBtn title="Display" event={() => activeDisplayFilter ? setActiveDisplayFilter(false) : setActiveDisplayFilter(true)} />
                  <>
                    {activeDisplayFilter ?
                      <NavMenuLayout>
                        <SadebarItem title="All">
                          tt
                        </SadebarItem>
                        <SadebarItem title="All">
                          tt
                        </SadebarItem>
                        <SadebarItem title="All">
                          tt
                        </SadebarItem>
                        <SadebarItem title="All">
                          tt
                        </SadebarItem>
                        <SadebarItem title="All">
                          tt
                        </SadebarItem>
                      </NavMenuLayout>
                      :
                      <></>
                    }
                  </>
                </div>
              </div>
            </div>
            <div className={Styles.rightSide}>
              <div className={Styles.switcher}>
                <div className={props.isLight === 'dark' ? Styles.itemSelect : Styles.item} onClick={() => props.isLight === 'light' ? props.setIsLight('dark') : props.setIsLight('dark')}>
                  <DarkIcon />
                </div>

                <div className={props.isLight === 'light' ? Styles.itemSelect : Styles.item} onClick={() => props.isLight === 'light' ? props.setIsLight('light') : props.setIsLight('light')}>
                  <LightIcon />
                </div>
              </div>
              <div className={Styles.profile} onClick={() => isRegister ? setIsRegister(false) : setIsRegister(true)}>
                <ProfileIcon />
              </div>
              <div className={Styles.burgerMenu} onClick={() => activeMenu ? setActiveMenu(false) : setActiveMenu(true)}>
                {activeMenu ?
                  <CloseIcon /> :
                  <MenuIcon />
                }

              </div>
            </div>
          </div>
          <div className={activeMenu ? Styles.sideNavMenuActive : Styles.sideNavMenu}>
            <div className={Styles.items}>
              <CategoryBtn title="All" />
              <CategoryBtn title="Display" />
            </div>
          </div>
        </div>


      </div>

      <>
        {isRegister ?
          <Modal title="Sign in" hasIcon={true} setIsEvent={setIsRegister} isEvent={isRegister}>
            <div className={Styles.registerContainer}>
              <Btn title="helllo" type="secondary" />
              <div className={Styles.describe} >Or Sign in with your detail</div>
              <div className={Styles.inputs}>
                <Input title="Name" placeholder="type your name" />
                <Input title="Email Address" placeholder="Valid Email Address" />
              </div>
              <div className={Styles.hasAccount}>
                <div className={theme === 'light' ? Styles.text : Styles.textDark}>Already have account ?</div><Link href='#' className={Styles.link}>Sign in</Link>
              </div>
              <div className={Styles.resetPass}>
                <Link href='#' className={Styles.link}>Forgot password ? </Link>
              </div>
              <div className={Styles.signinBtn}>
                <Btn title="Sign in" type="primary" />
              </div>
            </div>
          </Modal> : <></>}
      </>



    </>
  )
}
