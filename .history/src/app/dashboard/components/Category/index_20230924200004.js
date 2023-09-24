
import { useState } from 'react';

import styles from './style.module.scss'

export default function index() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      return (
        <div className="dropdown">
          <button onClick={toggleDropdown}>Select</button>
    
          {isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
        </div>
      );
}
