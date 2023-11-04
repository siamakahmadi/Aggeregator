import { useContext,useEffect } from "react";
import Styles from "./style.module.scss";
import HeaderContent from "../../Api/context/HeaderContent";
export default function Index(props) {
  const headerDetail = useContext(HeaderContent);


  const content = headerDetail.map((detail)=>{
    {console.log(detail)}
    <div className={Styles.container}>
    <div className={Styles.header}>
      <div className={Styles.headerTitle}>
        <p>Curated web design inspiration catalog</p>
      </div>
      <div className={Styles.headerdiscription}>
        <p>
          Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc
          Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc{" "}
        </p>
      </div>
      {props.display && (
        <div className={Styles.display}>
          <p className={Styles.title}>Display</p>
        </div>
      )}
    </div>
  </div>
  })
  
  return (
    <div
      className={
        props.isLight === "light" ? Styles.lightHeader : Styles.darkHeader
      }
    >
     {content}
    </div>
  );
}
