import Image from "next/image";
import cauldron from "../public/cauldron.png";
import Link from "next/link";
import NavbarBtn from "./utility/navbarBtn";
import { useState, useContext, useEffect } from "react";
import { useAuth } from "../context/authProvider";
import { useRouter } from "next/router";
export default function Navbar({ isMenuOpen, setMenu }) {
  const router = useRouter();
  const [userAuth, setUserAuth, persist, setPersist] = useAuth();

  useEffect(() => {
    console.log(userAuth);
    if (userAuth) {
      console.log("user is logged in");
    }
  }, [userAuth]);

  return (
    <div className="flex flex-row justify-between md:justify-around  w-full bg-navbar shadow-xl">
      <div className=" flex center items-center justify-center p-4 ">
        <Image
          src={cauldron}
          alt="picture of the logo"
          width={42}
          height={42}
        />
        <h1 className="font-bold text-xl mt-2">Access Control Management</h1>
      </div>

      {Object.keys(userAuth).length !== 0 ? (
        <div className="cursor-pointer flex center items-center justify-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z" />
            </g>
          </svg>
        </div>
      ) : (
        <div>
          <button
            className="cursor-pointer flex flex-row justify-center items-center pr-4 md:hidden transition-all ease-in"
            onClick={() => {
              setMenu(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-900 transition ease-in-out delay-150 duration-300"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
                data-hide="true"
              >
                <path d="M18 6L6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10  text-gray-900"
                viewBox="0 0 20 20"
                fill="none"
                data-hide="false"
              >
                <path
                  d="M2.5 7.5H17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M2.5 12.5H17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </button>

          <div className="hidden md:block md:flex md:justify-around md:items-center md:p-4 ">
            <NavbarBtn btnName="dashboard" btnLink="/dashboard" />
            <NavbarBtn btnName="My Profile" btnLink="/profile" />
            <NavbarBtn
              btnName={userAuth ? "Logout" : "Login"}
              btnLink="/login"
              onClick={(e) => {
                localStorage.removeItem("userInfo");
                setUserAuth(false);
                setPersist({});
                router.push("/");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
