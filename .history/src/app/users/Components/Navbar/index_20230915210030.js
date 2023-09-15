
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
import Cookies from 'universal-cookie'

// Icons
import DarkIcon from '../../Assets/svg/dark'
import LightIcon from '../../Assets/svg/light'
import CloseIcon from "../../Assets/svg/closeIcon";
import MenuIcon from '../../Assets/svg/menuIcon'
import ProfileIcon from '../../Assets/svg/profileIcon'
import BookmarkIocn from '../../Assets/svg/bookmarkIcon'
import Https from "../../Api/Https";


export async function getServerSideProps() {
  const cookies = new Cookies()
  function setLight(){
    cookies.set('theme', 'light', { path: '/users', expires: new Date(Date.now() + 3600000) }) 
  }
  function setDark(){
    cookies.set('theme', 'dark', { path: '/users', expires: new Date(Date.now() + 3600000) }) 
  }
  return { props: { setDark,setLight } }
}
 


export default function Index(props,{setDark,setLight}) {
  const theme = useContext(ThemeContext)


  const [formData, setFormData] = useState({});

  const [activeMenu, setActiveMenu] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [activeFilter, setActiveFilter] = useState(false)
  const [activeDisplayFilter, setActiveDisplayFilter] = useState(false)


  const [categoryItems, setCategoryItems] = useState([])



  const https = new Https();

  const CategoryItemsList = categoryItems.message === "Category deleted" ?
    <>
      {categoryItems.data.map(item => (
        <>
          {item.type === 'Tags' ?
            <Link href={item.name}>
              <SadebarItem title={item.name}>
                tt
              </SadebarItem>
            </Link>
            : <></>
          }

        </>
      ))}
    </> : <div>wating...</div>


  const TypeFace = categoryItems.message === "Category deleted" ?
    <>
      {categoryItems.data.map(item => (
        <>
          {item.type === 'Type Face' ?
            <SadebarItem title={item.name}>
              tt
            </SadebarItem>
            : <></>
          }

        </>
      ))}
    </> : <div>wating...</div>



  useEffect(() => {
    https.get('user/category/index').then(Response => {
      setCategoryItems(Response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [setCategoryItems])



  function bookmarks() {
    https.delete(`admin/category/${id}`).then(
      Response => {
        console.log(Response)
      }
    ).catch(error => {
      console.log(error)
    })
  }


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    https.post(`user/login?email=${formData.email}&password=${formData.password}`)
      .then(
        Response => {
          console.log(Response)
        }
      ).catch(error => {
        console.log(error)
      })
  }


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
                        {TypeFace}
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
                <div className={props.isLight === 'dark' ? Styles.itemSelect : Styles.item} onClick={setDark()}>
                  <DarkIcon />
                </div>

                <div className={props.isLight === 'light' ? Styles.itemSelect : Styles.item} onClick={setLight()}>
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
              <form onSubmit={handleSubmit}>
                {/* <Btn title="helllo" type="secondary" /> */}
                {/* <div className={Styles.describe} >Or Sign in with your detail</div> */}
                <div className={Styles.inputs}>
                  <Input title="Email" placeholder="type your Email" name='email' value={formData.email} onChange={handleChange} />
                  <Input title="password" placeholder="Valid password" name='password' value={formData.password} onChange={handleChange} />

                </div>
                <div className={Styles.hasAccount}>
                  <div className={theme === 'light' ? Styles.text : Styles.textDark}>Already have account ?</div><Link href='#' className={Styles.link}>Sign in</Link>
                </div>
                <div className={Styles.resetPass}>
                  <Link href='#' className={Styles.link}>Forgot password ? </Link>
                </div>
                <div className={Styles.signinBtn}>
                  {/* <Btn submitType="submit"  title="Sign in" type="primary"  /> */}
                  <button type='submit'>click here</button>
                </div>
              </form>
            </div>
          </Modal> : <></>}
      </>



    </>
  )
}
