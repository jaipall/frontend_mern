import { createContext, useContext } from "react";
// const AppContext = createContext({
//   name: "Jaipal",
//   count: 0,
// });
// export { AppContext };

const MyContext = createContext();

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContext, useMyContext };
