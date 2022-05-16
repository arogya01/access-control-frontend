import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavbarBtn from "../components/utility/navbarBtn";

export default function Home() {
  return (
    <div className="flex flex-col p-12 h-screen">
      <h1 className="font-bold text-2xl text-center">
        Welcome to Access Control Management
      </h1>
      <div className="flex flex-row p-8 justify-center align-center">
        <div className="p-8">
          <NavbarBtn btnName="Login" btnLink="/login" />
        </div>
        <p className="p-8">OR</p>
        <div className="p-8">
          <NavbarBtn btnName="Signup" btnLink="/signup" />
        </div>
      </div>
    </div>
  );
}
