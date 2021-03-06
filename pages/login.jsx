import { useReducer, useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/authProvider";
import { GlobalSpinnerContext } from "../context/globalSpinnerContext";
import Spinner from "../components/utility/Spinner";
import { ToastContainer, toast } from "react-toastify";
import { PopupDialogContext } from "../context/popupDialogContext";
// import PopupDialog from "../components/utility/popupDialog";
import Toaster from "../components/utility/toaster";

export default function Login() {
  const router = useRouter();
  const [userAuth, setUserAuth, persist, setPersist] = useAuth();
  const [globalSpinner, setGlobalSpinner] = useContext(GlobalSpinnerContext);
  const [isPopupDialogOn, setPopupDialog, popupMessage, setPopupMessage] =
    useContext(PopupDialogContext);
  const [errMessage, setErrorMessage] = useState("");

  const initialState = {
    email: "",
    password: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "addUser":
        return { ...state, [action.field]: action.payload };
        break;
    }
  }

  const handleTextChange = (event) => {
    dispatch({
      type: "addUser",
      field: event.target.name,
      payload: event.target.value,
    });
  };

  const [formState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (userAuth) {
      router.push("/dashboard");
    }

    return setGlobalSpinner(false);
  }, [formState, setGlobalSpinner]);

  const handleUserLogin = async (event) => {
    setErrorMessage("");
    setGlobalSpinner(true);
    event.preventDefault();
    console.log(formState);

    try {
      const res = await fetch("https://access30.herokuapp.com/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formState),
      });

      const userDetails = await res.json();
      console.log(userDetails);

      if (userDetails && Object.keys(userDetails).length === 0) {
        setErrorMessage("Invalid Credentials!!");
      } else if (userDetails.error) {
        setErrorMessage(userDetails.error);
      } else {
        setPersist({ ...userDetails });
        localStorage.setItem("userInfo", JSON.stringify(userDetails));
        setUserAuth(true);
        router.push("/dashboard");
      }

      setGlobalSpinner(false);

      // setUserAuth(userDetails);
      // setPopupDialog(true);
    } catch (err) {
      if (!err) {
        console.log("no error response");
      }
      console.log(err);
      setErrorMessage(err.message);
      setPopupMessage(err.message);
      setPopupDialog(true);
      console.log("error message:", err);
      // setPopupDialog(true);
    }
  };

  return (
    <div className="w-full h-screen m-auto flex flex-row items-center justify-center ">
      <Toaster />
      <form
        onSubmit={(event) => {
          handleUserLogin(event);
        }}
        className="flex flex-row flex-wrap    border-2 p-6 w-1/2"
      >
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full rounded-lg p-2.5"
            name="email"
            value={formState.email}
            placeholder="arogya@gmail.com"
            onChange={(event) => {
              handleTextChange(event);
            }}
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="password" className="block font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block border-2  w-full  rounded-lg p-2.5"
            placeholder="arogya12"
            onChange={(event) => {
              handleTextChange(event);
            }}
            required
          />
        </div>
        <span className="flex px-2.5 text-red-700 font-bold text-sm">
          {errMessage}
        </span>
        <div className="mt-4 w-full grid place-content-center">
          <button
            type="submit"
            className="flex bg-cyan-500 transition-all hover:bg-cyan-600  font-bold font-sans p-3 rounded-md mr-8 p-2.5"
          >
            {globalSpinner ? <Spinner /> : ""}
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
