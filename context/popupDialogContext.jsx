import { createContext,React,useState } from "react"

export const PopupDialogContext = createContext();

export default function PopupDialogContextProvider(props){
    const [isPopupDialogOn, setPopupDialog] = useState(false);

    return(
        <PopupDialogContext.Provider value={[isPopupDialogOn,setPopupDialog]}>
        {props.children}
        </PopupDialogContext.Provider>
    )
}