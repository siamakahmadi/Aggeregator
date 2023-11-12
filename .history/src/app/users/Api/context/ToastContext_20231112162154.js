import { createContext } from 'react';

const MyContext = createContext({
  value: false,
  setValue: () => {},
});

export default MyContext;
