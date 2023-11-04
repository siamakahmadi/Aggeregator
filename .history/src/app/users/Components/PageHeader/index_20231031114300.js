import { useState, useEffect } from "react";
import Styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import Https from "../../Api/Https";
export default function Index(props) {
  const pathname = usePathname();
  const https = new Https();

  const [categoryDetails, setCategoryDetails] = useState([]);
  console.log(categoryDetails)
  

  const searchName = 'Game'; // Replace with the name you want to search for

  categoryDetails.find
 categoryDetails.find(obj => obj.name === searchName);

  if (foundObject) {
    console.log('Object found:', foundObject);
  } else {
    console.log('Object not found');
  }




  useEffect(() => {
    https
      .get(`user/category/index?${pathname}`)
      .then((Response) => {
        setCategoryDetails(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className={
        props.isLight === "light" ? Styles.lightHeader : Styles.darkHeader
      }
    >
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
    </div>
  );
}
