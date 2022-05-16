import Navbar from "./navbar"
import AuthProvider from "../context/authProvider";
export default function Layout(props){
    const {...children} = props;
    return(
        <AuthProvider>
        <div>
        <Navbar></Navbar>
        {children}
        </div>
        </AuthProvider>
    )
}