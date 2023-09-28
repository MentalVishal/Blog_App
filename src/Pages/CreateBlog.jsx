import React, { useState } from "react";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cate, setCate] = useState("");
  const [date, setDate] = useState("");

  const token = localStorage.getItem("token");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
      category: cate,
      date: date,
    };
    await fetch(`https://beautiful-rose-narwhal.cyclic.cloud/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Sucessfull Blog Created");
      })
      .catch((err) => {
        alert("something went wrong");
      });
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content..."
          onChange={(e) => setContent(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setCate(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Business">Bussiness</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <input
          type="date"
          placeholder="Date..."
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Create Blog" />
      </form>
    </div>
  );
};
