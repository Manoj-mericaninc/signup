/** @format */

// /** @format */

// // /** @format */
// // "use client";

// import { app } from "@/app/firebase/firebase";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";

// export const UserContext = createContext(null);

// export const UserContextProvider = ({ children }) => {
//   const auth = getAuth(app);
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//       setUser(currentuser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   const value = {
//     user,
//   };
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
