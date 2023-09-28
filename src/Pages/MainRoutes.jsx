import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blogs } from "./Blogs";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { PrivateRoute } from "./PrivateRoute";
import { CreateBlog } from "./CreateBlog";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        }
      />
      <Route path="/signIn" element={<Login />} />
      <Route path="/createblog" element={<CreateBlog />} />
      <Route path="/signUp" element={<Signup />} />
    </Routes>
  );
};
