import GlobalSpinnerContextProvider from "../context/globalSpinnerContext";
import AuthProvider, { useAuth } from "../context/authProvider";
import "../styles/globals.css";
import { useEffect, createContext, useState } from "react";

export const AuthContext = createContext();

function MyApp({ Component, pageProps }) {
  const [userAuth, setUserAuth] = useState({});
  const [persist, setPersist] = useState(false);
  // useEffect(() => {
  //   localStorage.setItem()
  // });
  return (
    <AuthContext.Provider value={[userAuth, setUserAuth, persist, setPersist]}>
      <GlobalSpinnerContextProvider>
        <Component {...pageProps} />
      </GlobalSpinnerContextProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
