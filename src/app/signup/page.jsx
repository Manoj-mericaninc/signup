/** @format */
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fire } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

// import { appendMutableCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import app from "../firebase/firebase";

const page = () => {
  const [inputs, setInputs] = useState([]);
  const router = useRouter();

  const auth = getAuth(app);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    console.log(inputs);
    await setDoc(doc(fire, "signup", Date.now().toString()), inputs);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div>
      <div className=" bg-gray-50 dark:bg-gray-900 w-full h-screen ">
        <section className="flex items-center justify-center ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 flex  ml-96 ">
            <div>
              <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 ">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex justify-center">
                  Sign up
                </h2>
                <form
                  className="mt-8 space-y-6"
                  action="#"
                  onSubmit={handleSubmit}>
                  <div className="flex gap-2">
                    <div>
                      <input
                        type="firstName"
                        name="text"
                        id="firstName"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 grid grid-rows-2"
                        placeholder="First Name*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="text"
                        id="lastName"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 px-5 dark:focus:border-blue-500"
                        placeholder="Last Name*"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <input
                        type="text"
                        name="text"
                        id="userName"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="User Name*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-5"
                        placeholder="Phone Number*"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email Address*"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="text"
                      id="text"
                      placeholder="Country*"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      placeholder="Password*"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="confirmPassword"
                      onChange={handleChange}
                      placeholder="Confirm Password*"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-start"></div>
                  <button
                    type="submit"
                    className=" px-48 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">
                    Sign Up
                  </button>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Already have an account?{" "}
                    <a className="text-blue-600 hover:underline dark:text-blue-500">
                      <button type="button" onClick={() => router.push("/")}>
                        Sign in
                      </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
