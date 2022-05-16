import Spinner from "./Spinner";
import { useContext } from "react";
import { GlobalSpinnerContext } from "../../context/globalSpinnerContext";

export default function FormBtn() {
  const [isGlobalSpinnerOn, setGlobalSpinner] =
    useContext(GlobalSpinnerContext);

  return (
    <button
      type="submit"
      className="bg-cyan-500 flex flex-row transition-all hover:bg-cyan-600  font-bold font-sans p-3 rounded-md mr-8 p-2.5"
    >
      {isGlobalSpinnerOn ? <Spinner /> : ""}

      <span>Sign Up</span>
    </button>
  );
}
