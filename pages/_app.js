import GlobalSpinnerContextProvider from "../context/globalSpinnerContext";
import PopupDialogContextProvider from "../context/popupDialogContext";
import AuthProvider, { useAuth } from "../context/authProvider";
import "../styles/globals.css";
import { useEffect, createContext, useState } from "react";

export const AuthContext = createContext();

function MyApp({ Component, pageProps }) {
  const [userAuth, setUserAuth] = useState(false);
  const [persist, setPersist] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    console.log(user);
    if (user) {
      setUserAuth(true);
      console.log(userAuth);
    }
  }, [persist]);
  return (
    <AuthContext.Provider value={[userAuth, setUserAuth, persist, setPersist]}>
      <PopupDialogContextProvider>
        <GlobalSpinnerContextProvider>
          <Component {...pageProps} />
        </GlobalSpinnerContextProvider>
      </PopupDialogContextProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
