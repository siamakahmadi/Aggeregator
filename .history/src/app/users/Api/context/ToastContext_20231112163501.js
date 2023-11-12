import { createContext } from 'react';

const MyContext = createContext({
  value: null,
  valueChecker:()=>{
    value===true 
  },
  setValue: () => {},
});

export default MyContext;
