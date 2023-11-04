import React, { useContext } from "react";
import Styles from "./style.module.scss";
import ThemeContext from "../../Api/context/ThemeContext";
import HomeIcon from "../../Assets/svg/homeIcon";
import TypeFace from "../../Assets/svg/Typefaces";
import BookmarkIcon from "../../Assets/svg/bookmarkIcon";
import { usePathname } from "next/navigation";

export default function Index(props) {
  const theme = useContext(ThemeContext);
  const pathname = usePathname();
  return (
    <div
      className={
        theme === "light" ? Styles.sideBarItemLight : Styles.sideBarItemDark
      }
      onClick={props.event}
    >
      <div className={Styles.icon}>
        {/* {props.type === 'display' ? <TypeFace/> : !props.currentDropdownItem ? <HomeIcon/> : ''} */}
        {props.type === "display" ? (
          <TypeFace /) : pathname === "/users/all" ? (
          <HomeIcon/>
        ) : pathname === "/users/bookmark" ? (
          <BookmarkIcon/>
        ) : !props.scurrentDropdownItem ? (
          <HomeIcon/>
        ) : (
          's'
        )}
      </div>
      <div className={Styles.title}>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
