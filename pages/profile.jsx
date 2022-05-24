import { useState, useEffect } from "react";
import { GlobalSpinnerContext } from "../context/globalSpinnerContext";

const ProfileForm = ({
  setInfo,
  criminalRecord,
  setCriminalRecord,
  age,
  setAge,
}) => {
  //   const [criminalRecord, setCriminalRecord] = useState(false);
  //   const [age, setAge] = useState(0);
  return (
    <div className="w-1/2 mx-auto p-16">
      <div>
        <p className="text-lg font-bold text-center mb-8">
          Answer a few questions to build your profile
        </p>
      </div>
      <div className="flex flex-col mt-4">
        <p className="font-bold text-lg mb-4">
          {"Do you have criminal Record (true/false)"}{" "}
        </p>
        <input
          type="text"
          id="small-input"
          value={criminalRecord}
          onChange={(event) => {
            setCriminalRecord(event.target.value);
          }}
          class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mt-4">
        <p className="font-bold text-lg mb-4">{"What's your age"}</p>
        <input
          type="text"
          id="small-input"
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
          class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mt-4">
        <button
          type="submit"
          class="flex flex-row justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={async (event) => {
            event.target.innerHTML = "Hold up";
            const userinfo = JSON.parse(localStorage.getItem("userInfo"));

            const bod = JSON.stringify({
              email: userinfo.email,
              criminalRecord: criminalRecord,
              age: age,
            });
            const authtoken = userinfo.accessToken;

            try {
              const res = await fetch(
                `https://access30.herokuapp.com/${profile}`,
                {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: authtoken,
                  },
                  method: "POST",
                  body: bod,
                }
              );

              const user = res.json();
              console.log(user);
              const addedInfo = { user, ...userinfo };
              localStorage.setItem("userInfo", JSON.stringify(addedInfo));
              setInfo(true);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default function Profile() {
  const [isInfo, setInfo] = useState(false);
  const [criminalRecord, setCriminalRecord] = useState(false);
  const [age, setAge] = useState(0);
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    if (userInfo.criminalRecord && userInfo.age) {
      console.log(userInfo);
      console.log("yo");
      setInfo(true);
      setCriminalRecord(userInfo.criminalRecord);
      setAge(userInfo.age);
      setUserDetail({
        ...userDetail,
        ...userInfo,
      });
      console.log(userDetail);
    }
  }, []);
  return (
    <>
      {isInfo ? (
        <div className="flex flex-col border-2 border-black rounded-lg m-16">
          <div className="text-center font-bold p-8 text-lg">YOUR PROFILE</div>
          <div className="flex flex-col p-8">
            <h2 className="font-bold">your email</h2>
            <p>{userDetail.email}</p>
          </div>
          <div className="flex flex-col p-8">
            <h2 className="font-bold">your criminal record</h2>
            <p>{userDetail.criminalRecord}</p>
          </div>
          <div className="flex flex-col p-8">
            <h2 className="font-bold">your age</h2>
            <p>{userDetail.age}</p>
          </div>
        </div>
      ) : (
        <ProfileForm setInfo={setInfo} />
      )}
    </>
  );
}
