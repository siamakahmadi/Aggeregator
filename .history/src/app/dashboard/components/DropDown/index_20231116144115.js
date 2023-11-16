import { useState } from "react";
import Style from "./style.module.scss";
import React from "react";
import Arrow from "../../assets/svg/arrow";

export default function Index(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={Style.dropDown}>
      <div className={Style.inputContainer}>
        <div className={Style.label}>Label</div>
        <div className={Style.selected} onClick={() => setIsOpen(!isOpen)}>
          {selectedItem ? selectedItem.name : <div>Select an option</div>}
          <div className={isOpen ? Style.arrowOpen : ""}>
            <Arrow />
          </div>
        </div>
      </div>
      <div className={isOpen ? Style.menu : Style.menuClose}>
        <ul className={Style.itemList}>
          <li
            onClick={() => handleItemClick({ name: "item 1" })}
            className={Style.item}
          >
            Test 1
          </li>
          <li
            onClick={() => handleItemClick({ name: "item 2" })}
            className={Style.item}
          >
            Test 2
          </li>
          <li
            onClick={() => handleItemClick({ name: "item 3" })}
            className={Style.item}
          >
            Test 3
          </li>
        </ul>
      </div>
    </div>
  );
}
