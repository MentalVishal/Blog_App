import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5%",
      }}
    >
      <Link to={"/"}>
        <h1>Blogs Page</h1>
      </Link>
      <Link to={"/signIn"}>
        <h1>Login</h1>
      </Link>
      <Link to={"/signUp"}>
        <h1>SignUp</h1>
      </Link>
    </div>
  );
};
