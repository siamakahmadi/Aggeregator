"use client";
import { useContext, useLayoutEffect, useState, useEffect } from "react";
import Link from "next/link";
import Styles from "./style.module.scss";
import ThemeContext from "../../Api/context/ThemeContext";
import HeaderContent from "../../Api/context/HeaderContent";
import CategoryBtn from "../SidebarItem/CategoryBtn";
import Modal from "../ModalLayout/index";
import Input from "../Input/index";
import NavMenuLayout from "../NavMenuLayout/index";
import SadebarItem from "../SidebarItem/index";
import Logo from "../../Assets/Logo/logo";
import Https from "../../Api/Https";
import Cookies from "universal-cookie";
import SubmitBtn from "../Btn/submitBtn";
import Notify from "../Notify/index";
import { motion } from "framer-motion";
// Icons
import SubmitionDark from "../../Assets/svg/submitionDark";
import SubmitionLight from "../../Assets/svg/submitionLight";
import DarkIcon from "../../Assets/svg/dark";
import LightIcon from "../../Assets/svg/light";
import CloseIcon from "../../Assets/svg/closeIcon";
import MenuIcon from "../../Assets/svg/menuIcon";
import ProfileIcon from "../../Assets/svg/profileIcon";
import BookmarkIocn from "../../Assets/svg/bookmarkIcon";
import { useRouter, usePathname } from "next/navigation";
import IsLoggin from "../../Api/context/UserContext";

export default function Index(props) {
  const userValue = useContext(IsLoggin);


  const cookie = new Cookies();
  const theme = useContext(ThemeContext);

  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const userData = cookie.get("userLogin");
    props.setUserData(userData);
  }, []);

  const [formData, setFormData] = useState({});
  const [registerData, setRegisterData] = useState({});
  const [submitWeb, setSubmitWeb] = useState({});
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeDisplayFilter, setActiveDisplayFilter] = useState(false);

  const [categoryItems, setCategoryItems] = useState([]);

  const [message, setMessage] = useState(false);
  const https = new Https(
    "204|Ozwl7gMSErf5CZMu9zt8q4kue4AjRmxvFwIcct7n33d7ce33"
  );

  const CategoryItemsList =
    categoryItems.message === "Category fetched" ? (
      <>
        {categoryItems.data.map((item) => (
          <>
            {item.type === "Tags" ? (
              <HeaderContent.Provider>
              <Link key={item.id} href={item.name} onClick={()=>{console.log(props.setHeaderDetail(item.detail))}}>
                <SadebarItem key={item.id} title={item.name} >
                  {item.name.charAt()}
                </SadebarItem>
              </Link>
            ) : (
              <></>
            )}
          </>
        ))}
      </>
    ) : (
      <div>wating...</div>
    );

  const TypeFace =
    categoryItems.message === "Category fetched" ? (
      <>
        {categoryItems.data.map((item) => (
          <>
            {item.type === "Type Face" ? (
              <Link key={item.id} href={item.name}>
                <SadebarItem key={item.id} title={item.name}>
                  {item.name.charAt()}
                </SadebarItem>
              </Link>
            ) : (
              <></>
            )}
          </>
        ))}
      </>
    ) : (
      <div>wating...</div>
    );

  useEffect(() => {
    https
      .get("user/category/index")
      .then((Response) => {
        setCategoryItems(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCategoryItems]);

  function handleRegister(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmWeb(event) {
    setSubmitWeb({
      ...submitWeb,
      [event.target.name]: event.target.value,
    });
  }

  function handleRegisterSubmit(event) {
    event.preventDefault();
    https
      .post(
        `user/register?name=${registerData.name}&email=${registerData.email}&password=${registerData.password}&password_confirmation=${registerData.confirmPassword}`
      )
      .then((Response) => {
        setInterval(() => router.forward("/users/login"), 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmitWeb(event) {
    event.preventDefault();
    https
      .post(`post/submit`, submitWeb, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((Response) => {
        router.push("/users/submit/success");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    https
      .post(`user/login?email=${formData.email}&password=${formData.password}`)
      .then((Response) => {
        cookie.set(
          "userLogin",
          {
            isLoggin: true,
            userToken: `${Response.data.data.token}`,
            userEmail: `${Response.data.data.user_info.email}`,
            userId: `${Response.data.data.user_info.id}`,
          },
          {
            path: "/",
            expires: new Date(Date.now() + 3600000),
          }
        );
        setMessage(true);
        setInterval(() => router.push("/users/all"), 3000);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  function handleLogout() {
    cookie.remove("userLogin");
    setInterval(() => location.reload(), 3000);
  }

  function handleUserUpdate(event) {
    event.preventDefault();
    https
      .post(`profile/edit?_method=PUT`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((Response) => {
        setInterval(() => router.forward("/users/login"), 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className={theme === "light" ? Styles.navLight : Styles.navDark}>
        <div className={Styles.body}>
          <div className={Styles.container}>
            <motion.div className={Styles.leftSide}>
              <motion.div
                transition={{ duration: 0.1 }}
                initial={{ marginTop: -60 }}
                animate={{ marginTop: 0 }}
                className={Styles.Logo}
              >
                <Logo />
              </motion.div>
              <div className={Styles.menuBtns}>
                <motion.div
                  transition={{ duration: 0.3 }}
                  initial={{ marginTop: -60 }}
                  animate={{ marginTop: 0 }}
                  className={Styles.categoryBtn}
                >
                  <CategoryBtn
                    title="All"
                    event={() =>
                      activeFilter
                        ? setActiveFilter(false)
                        : setActiveFilter(true)
                    }
                  />
                  <>
                    {/* categories */}
                    {activeFilter ? (
                      <NavMenuLayout>
                        {userValue.isLoggin === true && (
                          <SadebarItem title="Bookmarks">
                            <div>
                              <BookmarkIocn />
                            </div>
                          </SadebarItem>
                        )}
                        <Link href={"all"}>
                          <SadebarItem title="All">
                            <div>
                              <BookmarkIocn />
                            </div>
                          </SadebarItem>
                          {CategoryItemsList}
                        </Link>
                      </NavMenuLayout>
                    ) : (
                      <></>
                    )}
                  </>
                </motion.div>
                <motion.div
                  transition={{ duration: 0.4 }}
                  initial={{ marginTop: -60 }}
                  animate={{ marginTop: 0 }}
                  className={Styles.categoryBtn}
                >
                  <CategoryBtn
                    title="Display"
                    event={() =>
                      activeDisplayFilter
                        ? setActiveDisplayFilter(false)
                        : setActiveDisplayFilter(true)
                    }
                  />
                  <>
                    {activeDisplayFilter ? (
                      <NavMenuLayout>{TypeFace}</NavMenuLayout>
                    ) : (
                      <></>
                    )}
                  </>
                </motion.div>
              </div>
            </motion.div>
            <div className={Styles.rightSide}>
              <motion.div
                transition={{ duration: 0.5 }}
                initial={{ marginTop: -180 }}
                animate={{ marginTop: 0 }}
                className={Styles.switcher}
              >
                <div
                  className={
                    props.isLight === "dark" ? Styles.itemSelect : Styles.item
                  }
                  onClick={() => props.setIsLight("dark")}
                >
                  <DarkIcon />
                </div>

                <div
                  className={
                    props.isLight === "light" ? Styles.itemSelect : Styles.item
                  }
                  onClick={() => props.setIsLight("light")}
                >
                  <LightIcon />
                </div>
              </motion.div>
              <motion.div
                className={Styles.profile}
                transition={{ duration: 0.4 }}
                initial={{ marginTop: -80 }}
                animate={{ marginTop: 0 }}
                onClick={
                  userValue.isLoggin === true
                    ? () => router.push("profile")
                    : () => router.push("register")
                }
              >
                <ProfileIcon />
              </motion.div>
              <div
                className={Styles.burgerMenu}
                onClick={() =>
                  activeMenu ? setActiveMenu(false) : setActiveMenu(true)
                }
              >
                {activeMenu ? <CloseIcon /> : <MenuIcon />}
              </div>
            </div>
          </div>
          <div
            className={
              activeMenu ? Styles.sideNavMenuActive : Styles.sideNavMenu
            }
          >
            <div className={Styles.items}>
              <CategoryBtn title="All" />
              <CategoryBtn title="Display" />
            </div>
          </div>
        </div>
      </div>
      <>
        {userValue.isLoggin === true
          ? pathname === "/users/profile" && (
              <Modal title="Profile" hasIcon={true}>
                <form
                  onSubmit={handleUserUpdate}
                  className={Styles.profileForm}
                >
                  <Input
                    title="Name"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    title="Email Address"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    title="Current Password"
                    placeholder="Your Current Password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                  />
                  <Input
                    title="New Password "
                    placeholder="Your New Password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                  />
                  <Input
                    title="Confirm New Password "
                    placeholder="Confirm Your New Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <SubmitBtn submitType="submit" title="Save" type="primary" />
                </form>
                <br />
                <SubmitBtn
                  oncClick={() => handleLogout}
                  title="Sign Out"
                  type="primary"
                />
              </Modal>
            )
          : (pathname === "/users/login" && (
              <Modal title="Sign In" hasIcon={true}>
                <div className={Styles.registerContainer}>
                  <form onSubmit={handleSubmit}>
                    {message ? (
                      <div>
                        <Notify
                          title="Login Successfully"
                          description="In 3s, you will be redirected to the home page"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className={Styles.inputs}>
                      <Input
                        title="Email"
                        placeholder="type your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Input
                        title="password"
                        placeholder="Valid password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={Styles.hasAccount}>
                      <div
                        className={
                          theme === "light" ? Styles.text : Styles.textDark
                        }
                      >
                        Are you want to create account?
                      </div>
                      <Link href="/users/register" className={Styles.link}>
                        Register
                      </Link>
                    </div>
                    <div className={Styles.resetPass}>
                      <Link href="#" className={Styles.link}>
                        Forgot password ?{" "}
                      </Link>
                    </div>
                    <div className={Styles.signinBtn}>
                      <SubmitBtn
                        submitType="submit"
                        title="Sign In"
                        type="primary"
                      />
                    </div>
                  </form>
                </div>
              </Modal>
            )) ||
            (pathname === "/users/register" && (
              <Modal title="Register" hasIcon={true}>
                <div className={Styles.registerContainer}>
                  <form onSubmit={handleRegisterSubmit}>
                    <div className={Styles.inputs}>
                      <Input
                        title="Name"
                        placeholder="Type Your Name"
                        name="name"
                        value={registerData.name}
                        onChange={handleRegister}
                      />
                      <Input
                        title="Email Address"
                        placeholder="Type Your Email Address"
                        name="email"
                        value={registerData.email}
                        onChange={handleRegister}
                      />
                      <Input
                        title="Password"
                        placeholder="Password"
                        name="password"
                        value={registerData.password}
                        onChange={handleRegister}
                      />
                      <Input
                        title="Confirm Password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={registerData.confirmPassword}
                        onChange={handleRegister}
                      />
                    </div>
                    <div className={Styles.hasAccount}>
                      <div
                        className={
                          theme === "light" ? Styles.text : Styles.textDark
                        }
                      >
                        Already have account ?
                      </div>
                      <Link href="/users/login" className={Styles.link}>
                        Sign in
                      </Link>
                    </div>
                    <div className={Styles.resetPass}>
                      <Link href="#" className={Styles.link}>
                        Forgot password ?{" "}
                      </Link>
                    </div>
                    <div className={Styles.signinBtn}>
                      <SubmitBtn
                        submitType="submit"
                        title="Register"
                        type="primary"
                      />
                      {/* <button type='submit'>click here</button> */}
                    </div>
                  </form>
                </div>
              </Modal>
            )) ||
            (pathname === "/users/submit" && (
              <Modal title="Sumbit Website" hasIcon={true}>
                <div className={Styles.registerContainer}>
                  <form onSubmit={handleSubmitWeb}>
                    <div className={Styles.inputs}>
                      <Input
                        title="Suggest Title"
                        placeholder="Type title for website"
                        name="title"
                        value={submitWeb.title}
                        onChange={handleSubmWeb}
                      />
                      <Input
                        title="Website Link"
                        placeholder="Type your wensite link"
                        name="website"
                        value={submitWeb.website}
                        onChange={handleSubmWeb}
                      />
                      <Input
                        title="Description"
                        placeholder="Tell us something about this website"
                        name="description"
                        value={submitWeb.description}
                        onChange={handleSubmWeb}
                      />
                    </div>
                    <div className={Styles.marginTop24}>
                      <div className={Styles.signinBtn}>
                        <SubmitBtn
                          submitType="submit"
                          title="Submit"
                          type="primary"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </Modal>
            )) ||
            (pathname === "/users/submit/success" && (
              <Modal title="Sumbit Website" hasIcon={true}>
                <div className={Styles.registerContainer}>
                  <div className={Styles.submition}>
                    <div
                      className={theme === "light" ? Styles.light : Styles.dark}
                    >
                      <div className={Styles.image}>
                        {theme === "light" ? (
                          <SubmitionLight />
                        ) : (
                          <SubmitionDark />
                        )}
                      </div>
                      <div className={Styles.textbody}>
                        <span>
                          We optimize Html.to.design power to convert live
                          website to figma files. hence there might be some
                          error in files.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            ))}
      </>
    </>
  );
}
