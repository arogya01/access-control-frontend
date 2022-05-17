import { createContext, React, useState } from "react";

export const PopupDialogContext = createContext();

export default function PopupDialogContextProvider(props) {
  const [isPopupDialogOn, setPopupDialog] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  return (
    <PopupDialogContext.Provider
      value={[isPopupDialogOn, setPopupDialog, popupMessage, setPopupMessage]}
    >
      {props.children}
    </PopupDialogContext.Provider>
  );
}
