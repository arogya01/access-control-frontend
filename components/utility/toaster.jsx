import { useContext } from "react";
import { PopupDialogContext } from "../../context/popupDialogContext";

export default function Toaster() {
  const [isPopupDialogOn, setPopupDialog, popupMessage, setPopupMessage] =
    useContext(PopupDialogContext);

  return isPopupDialogOn ? (
    <div className="transition-all fixed top-20 left-50 bg-btnColor px-8 py-4 rounded-lg">
      <p>{popupMessage}</p>
    </div>
  ) : (
    <div className="transition-all fixed hidden -top-50 left-50 bg-btnColor px-8 py-4 rounded-lg">
      <p>{popupMessage}</p>
    </div>
  );
}
