import { createContext } from 'react';

const MyContext = createContext({
  value: null,
  valueChecker:()=>{
    value===true ? set
  },
  setValue: () => {},
});

export default MyContext;
