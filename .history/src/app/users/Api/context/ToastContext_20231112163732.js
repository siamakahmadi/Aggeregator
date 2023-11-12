import { createContext } from "react";

const MyContext = createContext({
  value: null,
  setValue: () => {},
});

export default MyContext;
