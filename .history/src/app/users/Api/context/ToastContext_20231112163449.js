import { createContext } from 'react';

const MyContext = createContext({
  value: null,
  valueChecker:()
  setValue: () => {},
});

export default MyContext;
