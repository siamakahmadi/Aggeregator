import { useContext,useEffect } from "react";
import Styles from "./style.module.scss";
import HeaderContent from "../../Api/context/HeaderContent";
export default function Index(props) {
  const headerDetail = useContext(HeaderContent);


  headerDetail.map((detail)=>{

  })
  
  return (
    <div
      className={
        props.isLight === "light" ? Styles.lightHeader : Styles.darkHeader
      }
    >
     
    </div>
  );
}
