import { createContext } from 'react';

const MyContext = createContext({
  value: null,
  valueChecker:()=>{
    value=== true ? setInterval(() => {
        value:false
    }, 3000);
  },
  setValue: () => {},
});

export default MyContext;
