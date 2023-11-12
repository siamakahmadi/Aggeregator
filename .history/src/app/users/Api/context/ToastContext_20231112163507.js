import { createContext } from 'react';

const MyContext = createContext({
  value: null,
  valueChecker:()=>{
    value===true ? setInterval(() => {
        
    }, interval);
  },
  setValue: () => {},
});

export default MyContext;
