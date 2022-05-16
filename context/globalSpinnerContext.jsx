import { createContext,React,useState } from "react"

export const GlobalSpinnerContext= createContext();

export default function GlobalSpinnerContextProvider(props){
    const [isGlobalSpinnerOn, setGlobalSpinner] = useState(false);
    
    return(
        <GlobalSpinnerContext.Provider value={[isGlobalSpinnerOn,setGlobalSpinner]}>
        {props.children}
        </GlobalSpinnerContext.Provider>
    )   
}