import { createContext } from 'react';

const MyContext = createContext({
  value: null,
  valueChecker:()=>{
    value===
  },
  setValue: () => {},
});

export default MyContext;
