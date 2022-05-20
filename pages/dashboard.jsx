import Navbar from "../components/navbar";
import { useAuth } from "../context/authProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { ModalForm } from "../components/Modal";

export default function Dashboard() {
  const [userAuth, setUserAuth, persist, setPersist] = useAuth();
  const router = useRouter();
  const [isFormActive, setFormActive] = useState(false);
  const [layer, setLayer] = useState("");
  const [layernumber, setLayerNumber] = useState("");
  // useEffect(() => {
  //   if (!userAuth) {
  //     router.push("/");
  //   }
  // }, []);

  return userAuth ? (
    <>
      {isFormActive && (
        <ModalForm
          setFormActive={setFormActive}
          layer={layer}
          layerNumber={layernumber}
        />
      )}
      <Navbar />
      <h1 className="flex flex-row justify-center p-12 font-bold text-2xl">
        Welcome to Acess Control, {persist.name}
      </h1>
      <div className="flex flex-row justify-center items-center h-screen ">
        <Card
          content="Layer1"
          onClick={(event) => {
            setLayer("layer-1");
            setFormActive(true);
            setLayerNumber(1);
          }}
        />
        <Card
          content="Layer2"
          onClick={(event) => {
            setLayer("layer-2");
            setFormActive(true);
            setLayerNumber(2);
          }}
        />
        <Card
          content="Layer3"
          onClick={(event) => {
            setLayer("layer-3");
            setFormActive(true);
            setLayerNumber(3);
          }}
        />
      </div>
    </>
  ) : null;
}
