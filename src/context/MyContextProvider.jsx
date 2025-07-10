import { useState } from "react";
import { MyContext } from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  const valueobj = { count, setCount, user, setUser };

  return <MyContext.Provider value={valueobj}>{children}</MyContext.Provider>;
};
export { MyContextProvider };
