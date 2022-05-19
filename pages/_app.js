import GlobalSpinnerContextProvider from "../context/globalSpinnerContext";
import PopupDialogContextProvider from "../context/popupDialogContext";
import AuthProvider, { useAuth } from "../context/authProvider";
import "../styles/globals.css";
import { useEffect, createContext, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();
function MyApp({ Component, pageProps }) {
  const [userAuth, setUserAuth] = useState(false);
  const [persist, setPersist] = useState({
    name: "",
    email: "",
    acessToken: "",
    refreshToken: " ",
  });
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user);
    setPersist({ ...user });
    if (user) {
      setUserAuth(true);
    }
  }, []);

  useEffect(() => {
    if (userAuth) {
      router.push("/dashboard");
    }
  }, []);

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
