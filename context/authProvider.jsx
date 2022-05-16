import { useContext } from "react";
import { AuthContext } from "../pages/_app";
// export const AuthContext = createContext();

// export default function AuthProvider(props) {
//   const [userAuth, setUserAuth] = useState({});
//   const [persist,setPersist] = useState(JSON.parse(localStorage.getItem("persist") || false ));
//   return (
//     <AuthContext.Provider value={[userAuth, setUserAuth]}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

export function useAuth() {
  return useContext(AuthContext);
}
