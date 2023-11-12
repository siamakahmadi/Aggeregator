
import { createContext } from "react";
const ToastContext = createContext()
export default ToastContext;


import { createContext } from 'react';

const MyContext = createContext({
  value: 'Default Value',
  setValue: () => {},
});

export default MyContext;
