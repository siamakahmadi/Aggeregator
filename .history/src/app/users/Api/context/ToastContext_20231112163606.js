import { createContext } from 'react';

const MyContext = createContext({
  value: null,
  valueChecker:(value)=>{
    value === true ? setInterval(() => {
        value:false
    }, 3000): value:true
  },
  setValue: () => {},
});

export default MyContext;
