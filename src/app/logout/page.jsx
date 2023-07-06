/** @format */

"use client";

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useRouter } from "next/navigation";

const Logout = () => {
  const auth = getAuth(app);
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successfully");
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        class="focus:outline-none g-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1   py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 font-semibold flex flex-row -mt-1 ">
        Log Out
      </button>
    </div>
  );
};

export default Logout;
