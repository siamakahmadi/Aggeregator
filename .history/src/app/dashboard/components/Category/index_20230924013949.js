import { useState } from 'react';

import styles from './style.module.scss'

export default function index() {
    const [isOpen, setIsOpen] = useState(false);
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
    
          <style jsx>{`
            .dropdown {
              position: relative;
            }
            ul {
              position: absolute;
              background: #fff;
              border: 1px solid #eee;
            }
          `}</style>
        </div>
      );
}
