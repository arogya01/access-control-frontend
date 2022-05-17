import Navbar from "../components/navbar";
import { useAuth } from "../context/authProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [userAuth, setUserAuth, persist, setPersist] = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userAuth === false) {
      router.push("/");
    }
  }, []);

  return userAuth ? (
    <>
      <Navbar />
      <div className="flex flex-row justify-center items-center h-screen ">
        <Card content="Layer 1" />
        <Card content="Layer 2" />
        <Card content="Layer 3" />
      </div>
    </>
  ) : null;
}
