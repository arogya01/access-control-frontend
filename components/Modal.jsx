import { useEffect, useState } from "react";

export function ModalForm({}) {
  const [isSpinnerActive, setSpinner] = useState(true);

  useEffect(() => {
    const loader = setTimeout(() => {
      setSpinner(false);
    }, 1000);

    return () => clearTimeout(loader);
  }, []);

  return (
    <div className="fixed w-3/4 h-3/4 border-2 top-8 rounded-lg border-black z-5 left-1/2 -translate-x-2/4 bg-[#3f3844]">
      {isSpinnerActive ? (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-24px ">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
        <div className="flex flex-col w-full h-full px-16 py-8 bg-[#f0f1f6]">
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
                  value="doctor"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  checked
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
                  value="nurse"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  checked
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
                  name="role"
                  value="receptionist"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  checked
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

          <div className="flex flex-col my-4">
            <p className="font-bold text-lg mb-4">
              How many years have you been working in the org?
            </p>
            <input
              type="text"
              id="small-input"
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
              class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Check up Access
          </button>
        </div>
      )}
    </div>
  );
}
