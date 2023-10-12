import { useState, useEffect } from "react";
import Styles from './style.module.scss'
import { usePathname } from "next/navigation";

export default function Index(props) {

    
    const pathname = usePathname();
    const [categoryDetails, setCategoryDetails] = useState([]);
    useEffect(() => {
        https
          .get("user/index")
          .then((Response) => {
            setPosts(Response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      

    
    return (
        <div className={props.isLight === 'light' ? Styles.lightHeader : Styles.darkHeader}>
            <div className={Styles.container}>
                <div className={Styles.header}>
                    <div className={Styles.headerTitle}>
                        <p>Curated web design inspiration catalog</p>
                    </div>
                    <div className={Styles.headerdiscription}>
                        <p>Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc </p>
                    </div>{props.display && 
                    <div className={Styles.display}>
                        <p className={Styles.title}>
                            Display
                        </p>
                    </div>}

                </div>
            </div>
        </div>


    )
}
