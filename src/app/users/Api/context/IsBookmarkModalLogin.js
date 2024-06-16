
import { createContext } from "react";

const MyContext = createContext({
  isBookmarkLoginModal: null,
  setIsBookmarkLoginModal: () => {},
});

export default MyContext;
