import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { AlertToast, SuccessToast } from "Components";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("StormPlayToken");
  const [userState, setUserState] = useState({});
  const [effectTrigger, setEffectTrigger] = useState(false);

  const login = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: userDetails.email,
        password: userDetails.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("StormPlayToken", data.encodedToken);
      localStorage.setItem("StormPlayUser", data.foundUser.firstName);
      SuccessToast("Login Successful");
      setEffectTrigger(!effectTrigger);
    } catch (error) {
      AlertToast(`${error.response.data.errors}`);
    }
  };

  const signup = async (userDetails) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName: userDetails.user,
        email: userDetails.email,
        password: userDetails.passwordOne,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("StormPlayToken", data.encodedToken);
      localStorage.setItem("StormPlayUser", data.createdUser.firstName);
      SuccessToast("Signup Successful");
      setEffectTrigger(!effectTrigger);
    } catch (error) {
      AlertToast(`${error.response.data.errors}`);
    }
  };

  const signout = () => {
    setEffectTrigger(!effectTrigger);
    AlertToast(`Logged Out`);
    localStorage.removeItem("StormPlayToken");
    localStorage.removeItem("StormPlayUser");
    setUserState([]);
  };

  const testLogger = async () => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: "admin@gmail.com",
        password: "admin",
      });
      localStorage.setItem("StormPlayToken", data.encodedToken);
      localStorage.setItem("StormPlayUser", data.foundUser.firstName);
      SuccessToast("Login Successful");
      setEffectTrigger(!effectTrigger);
    } catch (error) {
      AlertToast(`${error.response.data.errors}`);
    }
  };

  useEffect(() => {
    (async function () {
      if (encodedToken) {
        try {
          const response = await axios.post("/api/auth/verify", {
            encodedToken: encodedToken,
          });
          if (response && response.data) {
            setUserState(response.data.user);
          }
        } catch (error) {
          AlertToast(`${error.response.data.errors}`);
        }
      }
    })();
  }, [effectTrigger]);

  return (
    <AuthContext.Provider
      value={{ login, signup, signout, testLogger, userState, encodedToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
