/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { getFirestore } from "firebase/firestore";
import { app } from "./firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [val, setVal] = useState([]);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const value = collection(db, "login");

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(value);
      setVal(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(val);
    };
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push("/profile");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    console.log(val);

    // val.forEach((value) => {
    //   // console.log(authenticate(email, password));
    //   if (value.email === email && value.password === password) {
    //     console.log(value);
    //     console.log(value.email);
    //     console.log(value.password);

    //     console.log(email);
    //     console.log(password);
    //     // console.log(authenticate(email, password));
    //     // localStorage.setItem("user", JSON.stringify({ email }));
    //     // router.push("/");
    //     // if (authenticate(email, password)) {
    //     //   return
    //     // } else {
    //     //   // handle login error
    //     //   console.log(value.email);
    //     //   console.log(value);
    //     //   console.log(email);
    //     //   console.log(password);
    //     //   return router.push("/signin");
    //     // }
    //   } else {
    //     console.log("signed in failed");
    //   }
    // });
  };

  return (
    <div className=" bg-gray-50 dark:bg-gray-900 w-full h-screen flex items-center justify-center">
      <section className="flex items-center justify-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ml-80">
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 ">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex justify-center">
                Sign in
              </h2>
              <form className="mt-8 space-y-6" action="#">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      name="remember"
                      type="checkbox"
                      className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="remember"
                      className="font-medium text-gray-500 dark:text-gray-400">
                      Remember this device
                    </label>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-orange-500">
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className=" px-32 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                  onClick={handleSubmit}>
                  Login
                </button>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet?{" "}
                  <a className="text-blue-600 hover:underline dark:text-blue-500">
                    <button
                      type="button"
                      onClick={() => router.push("/signup")}>
                      Sign Up
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default signin;
