import React from "react";
import { Link } from "react-router-dom";

export const Blogs = () => {
  const token = localStorage.getItem("token");

  return (
    <div style={{ display: "flex", gap: "5%" }}>
      <input type="text" placeholder="Search For Blogs" />

      <select>
        <option value="">Filter By Category</option>
        <option value="Business">Bussiness</option>
        <option value="Tech">Tech</option>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <select name="" id="">
        <option value="">Sort By Date</option>
        <option value="Asc">Ascending</option>
        <option value="Desc">Descending</option>
      </select>

      <Link to={"/createblog"}>
        <button>Create Blog</button>
      </Link>
    </div>
  );
};
