/** @format */

// /** @format */
// "use client";

// import React, { useContext } from "react";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { UserContext } from "../Context/UserContext";

// export default function withAuth(Component) {
//   return function ProtectedRoute({ ...props }) {
//     const router = useRouter();
//     const { user } = useContext(UserContext);
//     // const contextValue = useContext(UserContext);
//     // const user = contextValue && contextValue.user;

//     const userIsAuthenticated = user !== null;

//     useEffect(() => {
//       if (!userIsAuthenticated) {
//         router.push("/");
//       }
//     }, [userIsAuthenticated, router]);

//     return <Component {...props} />;
//   };
// }
