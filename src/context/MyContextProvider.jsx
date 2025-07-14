import { useEffect, useState } from "react";
import { MyContext } from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ isAuthenticated: false });
  const [appLoading, setAppLoading] = useState(false);

  const getUser = async () => {
    try {
      setAppLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const result = await response.json();
      const { isSuccess, data } = result;
      if (isSuccess == true) {
        setUser({
          isAuthenticated: true,
          ...data.user,
        });
      } else {
        alert("Please login again!");
      }
    } catch (err) {
      alert("user validation failed", err.message);
    } finally {
      setAppLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const valueobj = {
    count: count,
    setCount,
    user,
    setUser,
    appLoading,
  };

  return <MyContext.Provider value={valueobj}>{children}</MyContext.Provider>;
};
export { MyContextProvider };
