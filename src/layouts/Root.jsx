import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="">
      <div className="flex justify-center gap-10 my-8">
        <NavLink className="border px-3 py-2 rounded-xl" to="/">Home</NavLink>
        <NavLink className="border px-3 py-2 rounded-xl" to="/login">Login</NavLink>
        <NavLink className="border px-3 py-2 rounded-xl" to="/register">Register</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
