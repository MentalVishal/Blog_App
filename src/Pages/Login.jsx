import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/authReducer/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const props = {
      email: email,
      password: password,
    };
    dispatch(userLogin(props)).then((res) => {
      const token = localStorage.getItem("token");
      if (token) {
        alert("Login Sucess");
        navigate("/");
      } else {
        alert("Wrong Credential");
      }
    });
  };

  return (
    <div>
      <h1>Login User</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setpassword(e.target.value)}
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
