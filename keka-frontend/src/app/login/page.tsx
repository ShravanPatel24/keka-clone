import React from "react";
import Image from "next/image";
import Login from "@/components/Login";

const LoginPage = () => {
  return (
    <main className="container flex h-screen">
    <div className="">
      <Image
        src="https://cdn.kekastatic.net/login/v/M161_2023.10.09.1/images/login-image.jpg"
        alt="img"
        width={1500}
        height={0}
      />
    </div>
    <div className="main-container flex h-screen w-0">
      <div className="ml-10">
        <Login />
      </div>
    </div>
  </main>
  )
};

  export default LoginPage;