import { useContext, useEffect, useState } from "react";
import { GlobalSpinnerContext } from "../context/globalSpinnerContext";
import Spinner from "./utility/Spinner";
import { useAuth } from "../context/authProvider";
import Router, { useRouter } from "next/router";
import Image from "next/image";

export function ModalForm({ layer, setFormActive, layerNumber }) {
  const router = useRouter();
  const [isGlobalSpinnerOn, setGlobalSpinner] =
    useContext(GlobalSpinnerContext);
  const [isSpinnerActive, setSpinner] = useState(true);
  const [role, setRole] = useState("doctor");
  const [exp, setExp] = useState("");
  const [treated, setTreated] = useState("");
  const [criminalRecord, setCriminalRecord] = useState("no");
  const [persist, setPersist] = useAuth();
  const [message, setMessage] = useState("");
  const [isResult, setResult] = useState(false);
  useEffect(() => {
    const loader = setTimeout(() => {
      setSpinner(false);
    }, 1000);

    return () => clearTimeout(loader);
  }, []);

  return (
    <div className="fixed w-3/4 h-8/9 border-2 top-8 rounded-lg border-black z-5 left-1/2 -translate-x-2/4 bg-[#f0f1f6]">
      <div
        className=" flex w-full justify-end ml-auto p-4 w-24px h-24px "
        onClick={() => setFormActive(false)}
      >
        <Image src="/Cross.svg" width={24} height={24} alt="something" />
      </div>
      {isSpinnerActive ? (
        <div className="w-full h-full p-16 flex justify-center items-center">
          <div className="w-24px ">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full h-4/5 px-16 py-8 ">
          <div className="mx-auto text-center">
            <h2 className="font-bold">
              Please Answer some question to grant access to the files and
              verify your Identity
            </h2>
            <p className="text-[#ff0000] text-sm">
              Alert: if the probabilify obtained is less than 50%, then the
              access will not be granted
            </p>
          </div>
          <div className="flex flex-col my-4">
            <p className="font-bold text-lg mb-4">What is your role? </p>
            <fieldset className="flex flex-row">
              <div class="flex items-center mr-4">
                <input
                  id="role-option-1"
                  type="radio"
                  name="role"
                  checked={role === "doctor"}
                  onChange={() => {
                    setRole("doctor");
                  }}
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="role-option-1"
                  class="block ml-2 text-sm font-medium"
                >
                  Doctor
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="role-option-2"
                  type="radio"
                  name="role"
                  checked={role === "nurse"}
                  onChange={() => {
                    setRole("nurse");
                  }}
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="role-option-1"
                  class="block ml-2 text-sm font-medium"
                >
                  Nurse
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="role-option-3"
                  type="radio"
                  checked={role === "receptionist"}
                  onChange={() => {
                    setRole("receptionist");
                  }}
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="role-option-1"
                  class="block ml-2 text-sm font-medium"
                >
                  Receptionist
                </label>
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col mt-4">
            <p className="font-bold text-lg mb-4">
              How many years have you been working in the org?
            </p>
            <input
              type="text"
              id="small-input"
              value={exp}
              onChange={(event) => {
                setExp(event.target.value);
              }}
              class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col my-4">
            <p className="font-bold text-lg mb-4">
              How many patients have you treated?
            </p>
            <input
              type="text"
              id="small-input"
              value={treated}
              onChange={(event) => {
                setTreated(event.target.value);
              }}
              class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col my-4">
            <p className="font-bold text-lg mb-4">
              Do you've any past criminal records?{" "}
            </p>
            <fieldset className="flex flex-row">
              <div class="flex items-center mr-4">
                <input
                  id="criminal-option-1"
                  type="radio"
                  name="criminal"
                  checked={criminalRecord === "yes"}
                  onChange={() => {
                    setCriminalRecord("yes");
                  }}
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="role-option-1"
                  class="block ml-2 text-sm font-medium"
                >
                  Yes
                </label>
              </div>
              <div class="flex items-center mr-4">
                <input
                  id="criminal-option-1"
                  type="radio"
                  name="criminal"
                  checked={criminalRecord === "no"}
                  onChange={() => {
                    setCriminalRecord("no");
                  }}
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="role-option-1"
                  class="block ml-2 text-sm font-medium"
                >
                  No
                </label>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            class="flex flex-row justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={async (event) => {
              event.target.innerHTML =
                "Hold up, Checking Access By Running Fuzzy Logic";
              const userinfo = JSON.parse(localStorage.getItem("userInfo"));
              const authtoken = userinfo.accessToken;
              console.log(userinfo.email);
              setGlobalSpinner(true);
              console.log(treated, exp, role);
              try {
                console.log(persist.accessToken);
                const res = await fetch(
                  `https://access30.herokuapp.com/${layer}`,
                  {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      Authorization: authtoken,
                    },
                    method: "POST",
                    body: JSON.stringify({
                      email: userinfo.email,
                      treated: treated,
                      exp: exp,
                      role: role,
                      criminalRecord: criminalRecord,
                    }),
                  }
                );

                const user = await res.json();
                console.log(user);
                setGlobalSpinner(false);
                if (user.score > 5) {
                  setTimeout(() => {
                    setMessage(
                      "yay!!! , you're allowed to access the files , redirecting to the specific layer"
                    );
                    setResult(true);
                  }, 4000);
                  setTimeout(() => {
                    router.push(`/layer/${layerNumber}`);
                  }, 5500);
                } else {
                  setTimeout(() => {
                    setMessage(
                      `your score is ${user.score} , you're not allowed to access the files`
                    );
                    setResult(true);
                  }, 4000);
                  setTimeout(() => {
                    setFormActive(false);
                  }, 8000);
                }
              } catch (err) {
                if (err) {
                  console.log("err is", err);
                }
              }
            }}
          >
            <p className="mr-4"> Check up Access </p>
            <span className="ml-4">
              {" "}
              <Spinner />
            </span>
          </button>
        </div>
      )}
      {isResult && (
        <div className="flex flex-col p-4 my-2 mx-auto bg-[#98f1c9] w-1/2 rounded-xl items-center">
          <span className="font-bold">{message}</span>
        </div>
      )}
    </div>
  );
}
