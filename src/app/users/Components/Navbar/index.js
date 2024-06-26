"use client";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Styles from "./style.module.scss";
import ThemeContext from "../../Api/context/ThemeContext";
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
import BounceLoader from "react-spinners/BounceLoader";
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

// modalscontext
import IsLogginContext from "../../Api/context/IsLogginModal";
import IsRegisterContext from "../../Api/context/IsRegisterModal";
import IsSubmitModal from "../../Api/context/IsSubmitModal";
import IsModalSuccessSubmit from "../../Api/context/IsSubmitModalSuccess";
import isProfileModalContext from "../../Api/context/IsProfileModal";
import IsBookmarkModalLogin from "../../Api/context/IsBookmarkModalLogin";

export default function Index(props) {
  const cookie = new Cookies();
  const theme = useContext(ThemeContext);
  const { isBookmarkLoginModal, setIsBookmarkLoginModal } =
    useContext(IsBookmarkModalLogin);

  const pathname = usePathname();
  const router = useRouter();

  const containsContent = pathname.includes("content");

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userData = cookie.get("userLogin");
    setUserInfo(userData);
  }, []);

  // ModalsStates
  const [isLogginModal, setIsLogginModal] = useState();
  const [isRegisterModal, setIsRegisterModal] = useState();
  const [isSubmitModal, setIsSubmitModal] = useState();
  const [isModalSuccessSubmit, setModalSuccessSubmit] = useState();
  const [isProfileModal, setIsProfileModal] = useState();

  const [formData, setFormData] = useState({});
  const [registerData, setRegisterData] = useState({});
  const [submitWeb, setSubmitWeb] = useState({});
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeDisplayFilter, setActiveDisplayFilter] = useState(false);
  const [currentDropdownItem, setCurrentDropdownItem] = useState();
  const [currentDisplayBtn, setCurrentDisplayBtn] = useState();
  const [categoryItems, setCategoryItems] = useState([]);
  const [message, setMessage] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);
  const [websiteSubmitError, setWebsiteSubmitError] = useState(false);
  const [loginErrMesage, setLoginErrMessage] = useState(false);

  const https = new Https();

  const CategoryItemsList =
    categoryItems.message === "Category fetched" ? (
      <>
        {categoryItems.data.map((item) => (
          <>
            {item.type === "Tags" ? (
              <Link
                key={item.id}
                href={item.name}
                onClick={() => {
                  props.setHeaderContext(item.detail);
                  setCurrentDropdownItem(item.name);
                }}
              >
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

  const TypeFace =
    categoryItems.message === "Category fetched" ? (
      <>
        {categoryItems.data.map((item) => (
          <>
            {item.type === "Type Face" ? (
              <Link
                key={item.id}
                href={item.name}
                onClick={() => {
                  setCurrentDisplayBtn(item.name);
                  props.setHeaderContext(item);
                }}
              >
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
  }, []);

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
    setLoading(true);
    https
      .post(
        `user/register?name=${registerData.name}&email=${registerData.email}&password=${registerData.password}&password_confirmation=${registerData.confirmPassword}`
      )
      .then((Response) => {
        setInterval(() => router.forward("/users/login"), 3000);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleSubmitWeb(event) {
    event.preventDefault();
    setLoading(true);
    https
      .post(`post/submit`, submitWeb, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((Response) => {
        setIsSubmitModal(false);
        setModalSuccessSubmit(true);
      })
      .catch((error) => {
        setWebsiteSubmitError(error.response.data.data);
      })
      .finally(() => {
        setLoading(false);
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
    setLoading(true);
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
        setInterval(() => window.location.reload(), 2000);
      })
      .catch((error) => {
        setLoginErrMessage(error.response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleLogout() {
    cookie.remove("userLogin");
    setInterval(() => window.location.reload(), 2000);
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
        setInterval(() => router.forward("/users/all"), 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <IsLogginContext.Provider
      value={{ value: isLogginModal, setValue: setIsLogginModal }}
    >
      <IsRegisterContext.Provider
        value={{ value: isRegisterModal, setValue: setIsRegisterModal }}
      >
        <IsSubmitModal.Provider
          value={{ value: isSubmitModal, setValue: setIsSubmitModal }}
        >
          <IsModalSuccessSubmit.Provider
            value={{
              value: isModalSuccessSubmit,
              setValue: setModalSuccessSubmit,
            }}
          >
            <isProfileModalContext.Provider
              value={{ value: isProfileModal, setValue: setIsProfileModal }}
            >
              <div
                className={theme === "light" ? Styles.navLight : Styles.navDark}
              >
                <div className={Styles.body}>
                  <div className={Styles.container}>
                    <div className={Styles.leftSide}>
                      <div
                        transition={{ duration: 0.1 }}
                        initial={{ marginTop: -60 }}
                        animate={{ marginTop: 0 }}
                        className={Styles.Logo}
                      >
                        <Logo />
                      </div>
                      <div className={Styles.menuBtns}>
                        {containsContent ? (
                          <Link
                            className={
                              theme === "light"
                                ? Styles.backBtn
                                : Styles.backBtnDark
                            }
                            href={"/users/all"}
                          >
                            <span className={Styles.backIcon}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M2.91797 7H11.0846M2.91797 7L6.41797 10.5M2.91797 7L6.41797 3.5"
                                  stroke="black"
                                  stroke-width="1.25"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <span className={Styles.backBtnTitle}>Back</span>
                          </Link>
                        ) : (
                          <>
                            <div
                              transition={{ duration: 0.3 }}
                              initial={{ marginTop: -60 }}
                              animate={{ marginTop: 0 }}
                              className={Styles.categoryBtn}
                            >
                              <CategoryBtn
                                Cname={
                                  currentDropdownItem
                                    ? currentDropdownItem.charAt()
                                    : ""
                                }
                                currentDropdownItem={currentDropdownItem}
                                title={
                                  pathname === "/users/all"
                                    ? "All"
                                    : pathname === "/users/bookmark"
                                    ? "Bookmark"
                                    : !currentDropdownItem
                                    ? "Category"
                                    : currentDropdownItem
                                }
                                event={() =>
                                  activeFilter
                                    ? setActiveFilter(false)
                                    : setActiveFilter(true)
                                }
                              />
                              <>
                                {activeFilter ? (
                                  <NavMenuLayout
                                    submitBtnEvent={() =>
                                      setIsSubmitModal(true)
                                    }
                                  >
                                    {userInfo && userInfo.isLoggin && (
                                      <Link href={"bookmark"}>
                                        <SadebarItem title="Bookmarks">
                                          <div>
                                            <BookmarkIocn />
                                          </div>
                                        </SadebarItem>
                                      </Link>
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
                            </div>
                            <div
                              transition={{ duration: 0.4 }}
                              initial={{ marginTop: -60 }}
                              animate={{ marginTop: 0 }}
                              className={Styles.categoryBtn}
                            >
                              <CategoryBtn
                                title={
                                  !currentDisplayBtn
                                    ? "display"
                                    : currentDisplayBtn
                                }
                                type="display"
                                event={() =>
                                  activeDisplayFilter
                                    ? setActiveDisplayFilter(false)
                                    : setActiveDisplayFilter(true)
                                }
                              />
                              <>
                                {activeDisplayFilter ? (
                                  <NavMenuLayout
                                    submitBtnEvent={() =>
                                      setIsSubmitModal(true)
                                    }
                                  >
                                    {TypeFace}
                                  </NavMenuLayout>
                                ) : (
                                  <></>
                                )}
                              </>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className={Styles.rightSide}>
                      <motion.div
                        transition={{ duration: 0.5 }}
                        initial={{ marginTop: -180 }}
                        animate={{ marginTop: 0 }}
                        className={Styles.switcher}
                      >
                        <div
                          className={
                            props.isLight === "dark"
                              ? Styles.itemSelect
                              : Styles.item
                          }
                          onClick={() => props.setIsLight("dark")}
                        >
                          <DarkIcon />
                        </div>

                        <div
                          className={
                            props.isLight === "light"
                              ? Styles.itemSelect
                              : Styles.item
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
                          userInfo && userInfo.isLoggin
                            ? () => setIsProfileModal(true)
                            : () => setIsRegisterModal(true)
                        }
                      >
                        <ProfileIcon />
                      </motion.div>
                      <div
                        className={Styles.burgerMenu}
                        onClick={() =>
                          activeMenu
                            ? setActiveMenu(false)
                            : setActiveMenu(true)
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
                {userInfo && userInfo.isLoggin === true
                  ? isProfileModal && (
                      <Modal
                        title="Profile"
                        hasIcon={true}
                        btnEvent={() => setIsProfileModal(false)}
                      >
                        <form
                          onSubmit={handleUserUpdate}
                          className={Styles.profileForm}
                        >
                          <Input
                            title="Name"
                            placeholder={userInfo.name}
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <Input
                            title="Email Address"
                            placeholder={userInfo.userEmail}
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
                          <SubmitBtn
                            submitType="submit"
                            title="Save"
                            type="primary"
                          />
                        </form>
                        <br />
                        <SubmitBtn
                          oncClick={() => handleLogout}
                          title="Sign Out"
                          type="primary"
                        />
                      </Modal>
                    )
                  : (isLogginModal && (
                      <Modal
                        title="Sign In"
                        hasIcon={true}
                        btnEvent={() => {
                          setIsLogginModal(false);
                        }}
                      >
                        <div className={Styles.registerContainer}>
                          <form onSubmit={handleSubmit}>
                            {loginErrMesage && (
                              <div className={Styles.errorContainer}>
                                {Object.keys(loginErrMesage).map((field) => (
                                  <div
                                    key={field}
                                    className={Styles.errorField}
                                  >
                                    <strong>{field}:</strong>
                                    <ul>
                                      {loginErrMesage[field].map(
                                        (error, index) => (
                                          <li
                                            key={index}
                                            className={Styles.errorMessage}
                                          >
                                            {error}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                            {message && (
                              <div>
                                <Notify
                                  title="Login Successfully"
                                  description="In 3s, you will be redirected to the home page"
                                />
                              </div>
                            )}
                            {loading ? (
                              <BounceLoader color="#36d7b7" />
                            ) : (
                              <div className={Styles.inputs}>
                                <Input
                                  title="Email"
                                  placeholder="type your Email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                />
                                <Input
                                  type="password"
                                  title="password"
                                  placeholder="Valid password"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                />
                              </div>
                            )}
                            <div className={Styles.hasAccount}>
                              <div
                                className={
                                  theme === "light"
                                    ? Styles.text
                                    : Styles.textDark
                                }
                              >
                                Are you want to create account?
                              </div>
                              <Link
                                href=""
                                onClick={() => {
                                  setIsLogginModal(false);
                                }}
                                className={Styles.link}
                              >
                                Register
                              </Link>
                            </div>
                            <div className={Styles.resetPass}>
                              {/* <Link href="#" className={Styles.link}>
                              Forgot password ?{" "}
                            </Link> */}
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
                    (isRegisterModal && (
                      <Modal
                        title="Register"
                        hasIcon={true}
                        btnEvent={() => setIsRegisterModal(false)}
                      >
                        <div className={Styles.registerContainer}>
                          <form onSubmit={handleRegisterSubmit}>
                            <div className={Styles.inputs}>
                              {errorMessage && (
                                <div className={Styles.errorContainer}>
                                  {Object.keys(errorMessage).map((field) => (
                                    <div
                                      key={field}
                                      className={Styles.errorField}
                                    >
                                      <strong>{field}:</strong>
                                      <ul>
                                        {errorMessage[field].map(
                                          (error, index) => (
                                            <li
                                              key={index}
                                              className={Styles.errorMessage}
                                            >
                                              {error}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {loading ? (
                                <BounceLoader color="#36d7b7" />
                              ) : (
                                <>
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
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={registerData.password}
                                    onChange={handleRegister}
                                  />
                                  <Input
                                    title="Confirm Password"
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    value={registerData.confirmPassword}
                                    onChange={handleRegister}
                                  />
                                </>
                              )}
                            </div>
                            <div className={Styles.hasAccount}>
                              <div
                                className={
                                  theme === "light"
                                    ? Styles.text
                                    : Styles.textDark
                                }
                              >
                                Already have account ?
                              </div>
                              <Link
                                onClick={() => {
                                  setIsLogginModal(true);
                                }}
                                href=""
                                className={Styles.link}
                              >
                                Sign in
                              </Link>
                            </div>
                            <div className={Styles.resetPass}>
                              {/* <Link href="#" className={Styles.link}>
                              Forgot password ?{" "}
                            </Link> */}
                            </div>
                            <div className={Styles.signinBtn}>
                              <SubmitBtn
                                submitType="submit"
                                title="Register"
                                type="primary"
                              />
                            </div>
                          </form>
                        </div>
                      </Modal>
                    )) ||
                    (isSubmitModal && (
                      <Modal
                        title="Sumbit Website"
                        hasIcon={true}
                        btnEvent={() => setIsSubmitModal(false)}
                      >
                        <div className={Styles.registerContainer}>
                          <form onSubmit={handleSubmitWeb}>
                            {websiteSubmitError && (
                              <div className={Styles.errorContainer}>
                                {Object.keys(websiteSubmitError).map(
                                  (field) => (
                                    <div
                                      key={field}
                                      className={Styles.errorField}
                                    >
                                      <strong>{field}:</strong>
                                      <ul>
                                        {websiteSubmitError[field].map(
                                          (error, index) => (
                                            <li
                                              key={index}
                                              className={Styles.errorMessage}
                                            >
                                              {error}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </div>
                            )}
                            {loading ? (
                              <BounceLoader color="#36d7b7" />
                            ) : (
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
                            )}

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
                    (isModalSuccessSubmit && (
                      <Modal
                        title="Sumbit Website"
                        hasIcon={true}
                        btnEvent={() => setModalSuccessSubmit(false)}
                      >
                        <div className={Styles.registerContainer}>
                          <div className={Styles.submition}>
                            <div
                              className={
                                theme === "light" ? Styles.light : Styles.dark
                              }
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
                                  We optimize Html.to.design power to convert
                                  live website to figma files. hence there might
                                  be some error in files.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    )) ||
                    (isBookmarkLoginModal && (
                      <>
                        <Modal
                          title="Sign In"
                          hasIcon={true}
                          btnEvent={() => {
                            setIsBookmarkLoginModal(false);
                          }}
                        >
                          <div className={Styles.alertContainer}>
                            <div className={Styles.alertContent}>
                                For save Bookmark Should be loggined in !
                            </div>
                          </div>

                          <div className={Styles.registerContainer}>
                            <form onSubmit={handleSubmit}>
                              {loginErrMesage && (
                                <div className={Styles.errorContainer}>
                                  {Object.keys(loginErrMesage).map((field) => (
                                    <div
                                      key={field}
                                      className={Styles.errorField}
                                    >
                                      <strong>{field}:</strong>
                                      <ul>
                                        {loginErrMesage[field].map(
                                          (error, index) => (
                                            <li
                                              key={index}
                                              className={Styles.errorMessage}
                                            >
                                              {error}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {message && (
                                <div>
                                  <Notify
                                    title="Login Successfully"
                                    description="In 3s, you will be redirected to the home page"
                                  />
                                </div>
                              )}
                              {loading ? (
                                <BounceLoader color="#36d7b7" />
                              ) : (
                                <div className={Styles.inputs}>
                                  <Input
                                    title="Email"
                                    placeholder="type your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                  />
                                  <Input
                                    type="password"
                                    title="password"
                                    placeholder="Valid password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                  />
                                </div>
                              )}
                              <div className={Styles.hasAccount}>
                                <div
                                  className={
                                    theme === "light"
                                      ? Styles.text
                                      : Styles.textDark
                                  }
                                >
                                  Are you want to create account?
                                </div>
                                <Link
                                  href=""
                                  onClick={() => {
                                    setIsLogginModal(false);
                                  }}
                                  className={Styles.link}
                                >
                                  Register
                                </Link>
                              </div>
                              <div className={Styles.resetPass}>
                                {/* <Link href="#" className={Styles.link}>
                              Forgot password ?{" "}
                            </Link> */}
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
                      </>
                    ))}
              </>
            </isProfileModalContext.Provider>
          </IsModalSuccessSubmit.Provider>
        </IsSubmitModal.Provider>
      </IsRegisterContext.Provider>
    </IsLogginContext.Provider>
  );
}
