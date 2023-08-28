
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
import DarkIcon from '../../Assets/'

import Https from "../../Api/Https";

export default function index(props) {
  const theme = useContext(ThemeContext)
  const [activeMenu, setActiveMenu] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)
  const [activeDisplayFilter, setActiveDisplayFilter] = useState(false)


  const [categoryItems, setCategoryItems] = useState([])
  const https = new Https();
  
  const CategoryItemsList = categoryItems.message === "Post fetched" ?
    <>
      {posts.data.map(item => (
         <SadebarItem title="">
         tt
        </SadebarItem>
      ))}
    </> : <div>wating...</div>

  
  const TypeFace = categoryItems.message === "Post fetched" ?
    <>
      {posts.data.map(item => (
        <div>Hello</div>
      ))}
    </> : <div>wating...</div>


  useEffect(() => {
    https.get('user/category/index').then(Response => {
      setCategoryItems(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])



  return (
    <>
      <div className={theme === 'light' ? Styles.navLight : Styles.navDark}>
        <div className={Styles.body}>
          <div className={Styles.container}>
            <div className={Styles.leftSide}>
              <div className={Styles.Logo}>
                <Logo/>
              </div>
              <div className={Styles.menuBtns}>
                <div className={Styles.categoryBtn}>
                  <CategoryBtn title="All" event={() => activeFilter ? setActiveFilter(false) : setActiveFilter(true)} />
                  <>
                  {/* categories */}
                    {activeFilter ?
                      <NavMenuLayout>
                        {CategoryItemsList}
                        <SadebarItem title="All">
                          tt
                        </SadebarItem>
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
                    <DarkIcon/>
                </div>

                <div className={props.isLight === 'light' ? Styles.itemSelect : Styles.item} onClick={() => props.isLight === 'light' ? props.setIsLight('light') : props.setIsLight('light')}>
                    <LightIcon/>
                </div>
              </div>
              <div className={Styles.profile} onClick={() => isRegister ? setIsRegister(false) : setIsRegister(true)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.16797 16.666C4.16797 14.5827 5.83464 12.9993 7.83464 12.9993H12.0846C14.168 12.9993 15.7513 14.666 15.7513 16.666M12.5017 4.33301C13.9184 5.74967 13.9184 7.99967 12.5017 9.33301C11.085 10.6663 8.83503 10.7497 7.5017 9.33301C6.16837 7.91634 6.08503 5.66634 7.5017 4.33301C8.91837 2.99967 11.085 2.99967 12.5017 4.33301Z" stroke="#1A1A1A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className={Styles.burgerMenu} onClick={() => activeMenu ? setActiveMenu(false) : setActiveMenu(true)}>
                {activeMenu ?
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25 6.25L13.75 13.75M6.25 13.75L13.75 6.25" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> :
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.58203 10H15.4196M4.58203 13.335H15.4196M4.58203 6.66504H15.4196" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
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
