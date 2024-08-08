import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default function Root() {
  const { Logout, user } = useContext(AuthContext);
  const handleLogout = () => {
    Logout()
      .then(() => {
        console.log("Log out successful!");
      })
      .catch();
  };
  return (
    <div className="">
      <div className="flex justify-center gap-10 my-8">
        <NavLink className="border px-3 py-2 rounded-xl" to="/">
          Home
        </NavLink>
        {user ? (
          <button className="border px-3 py-2 rounded-xl" onClick={handleLogout}>Logout</button>
        ) : (
          <NavLink className="border px-3 py-2 rounded-xl" to="/login">
            Login
          </NavLink>
        )}
        <NavLink className="border px-3 py-2 rounded-xl" to="/register">
          Register
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
