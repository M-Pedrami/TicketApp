"use client";
import { useState } from "react";
import {toast} from "react-toastify"
import { useRouter } from "next/navigation";
const BASE_URL = process.env.BASE_URL || "";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClick = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/user/signup`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "content-type": "application/json",
        },
      });
      if(response.ok){
        const data = await response.json();
        console.log(data.response);
        toast.success("User Created");
        router.push("/")
        router.refresh()
        
      }
      
      if(!response.ok){
        const data = await response.json();
        toast.error("User Creation Failed:" + data.message)

      }
    } catch (error) {
      console.log("error from handleClick")
    }
  };
  const router = useRouter();
  return (
    <div className="bg-gray-400 flex flex-col max-w-96 m-auto mt-10 py-20 px-6 rounded-lg">
      <input
        type="text"
        placeholder="Name"
        value={userData.name}
        onChange={(e) =>
          setUserData((prevData) => ({
            ...prevData,
            name: e.target.value,
          }))
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) =>
          setUserData((prevData) => ({
            ...prevData,
            email: e.target.value,
          }))
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) =>
          setUserData((prevData) => ({
            ...prevData,
            password: e.target.value,
          }))
        }
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 border-2 rounded-lg border-white w-fit mt-2 mx-auto"
      >
        Register
      </button>
    </div>
  );
};
export default SignUp;
