import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignup } from "../Redux/authReducer/action";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const props = {
      username: username,
      email: email,
      avatar: avatar,
      password: password,
    };
    dispatch(userSignup(props)).then(() => {
      alert("Register SucessFull");
      navigate("/signIn");
    });
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => setusername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Avatar..."
          onChange={(e) => setAvatar(e.target.value)}
        />

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

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};
