// components/MultiSelectDropdown.js
import React, { useState } from 'react';
import styles from './MultiSelectDropdown.module.css'; // You can create a separate CSS module

const MultiSelectDropdown = ({ options, onChange }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleItem = (item) => {
    const isSelected = selectedItems.includes(item);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggleButton}>Select Items</button>
      <div className={styles.dropdownContent}>
        {options.map((item) => (
          <div
            key={item}
            className={`${styles.dropdownItem} ${selectedItems.includes(item) ? styles.selected : ''}`}
            onClick={() => handleToggleItem(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={() => onChange(selectedItems)}>Submit</button>
    </div>
  );
};

export default MultiSelectDropdown;
