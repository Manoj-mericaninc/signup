/** @format */
"use client";

import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import Navbar from "../Navbar/page";
import withAuth from "../../../HOC/hoc";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const [val, setVal] = useState([]);

  const value = collection(db, "login");

  useEffect(() => {
    const getData = async () => {
      const dbval = await getDocs(value);
      setVal(dbval.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  const handleCreate = async () => {
    if (!(firstName === "" || lastName === "")) {
      await addDoc(value, { name1: firstName, name2: lastName });
      setFirstName("");
      setLastName("");
    }
  };

  const handleDelet = async (id) => {
    const deletVal = doc(db, "login", id);
    await deleteDoc(deletVal);
  };

  const handleEdit = async (id, name1, name2) => {
    setFirstName(name1);
    setLastName(name2);
    setId(id);
    setShow(true);
  };

  const handleUpdate = async () => {
    const updateData = doc(db, "login", id);
    await updateDoc(updateData, { name1: firstName, name2: lastName });
    setShow(false);
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-900 w-full h-screen flex items-center justify-center">
        <div className=" flex justify-center items-center grid grid-cols lg:max-w-xl p-2 space-y-4 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 w-full">
          <h1 className="font-bold flex items-center justify-center">
            ToDo List
          </h1>
          <label htmlFor="title">Title:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // placeholder="Title"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="Description">Description:</label>
          <textarea
            // placeholder="Description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-8 px-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {!show ? (
            <button
              className="bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white g-2 p-1 rounded-lg font-semibold"
              onClick={handleCreate}>
              Create
            </button>
          ) : (
            <button
              className="bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 text-white g-2 p-1 rounded-lg font-semibold"
              onClick={handleUpdate}>
              Update
            </button>
          )}

          {val.map((values) => (
            <div>
              <h1>{values.name1}</h1>
              <h1>{values.name2}</h1>
              <button
                className="bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-white g-2 p-1 rounded-lg font-semibold"
                onClick={() => handleDelet(values.id)}>
                Delete
              </button>
              <button
                className="bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 text-white g-2 p-1 px-4 ml-2 rounded-lg font-semibold"
                onClick={() =>
                  handleEdit(values.id, values.name1, values.name2)
                }>
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
