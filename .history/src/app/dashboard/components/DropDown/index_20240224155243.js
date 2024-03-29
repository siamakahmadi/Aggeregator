
import { useState } from "react";
import Style from "./style.module.scss";
import React from "react";
import Arrow from "../../assets/svg/arrow";

export default function index(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  
  return (
    <div className={Style.dropDown}>
      <div className={Style.inputContainer}>
        <div className={Style.label}>label</div>
        <div
          className={Style.selected}
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          
          {!selectedItem ?   selectedItem.name : <div>select a option</div>}

          <div className={isOpen ? Style.arrowOpen : ""}>
            <Arrow />
          </div>
        </div>
      </div>
      <div className={isOpen ? Style.menu : Style.menuClsoe}>
        <ul className={Style.itemList}>
          <li
            onClick={() => selectedItem.push({ name: "item 3" })}
            className={Style.item}
          >
            test 1{console.log(selectedItem)}
          </li>
          <li
            onClick={() => selectedItem.push({ name: "item 2" })}
            className={Style.item}
          >
            test 2
          </li>
          <li
            onClick={() => selectedItem.push({ name: "item 4" })}
            className={Style.item}
          >
            test 3
          </li>
        </ul>
      </div>
    </div>
  );
}
