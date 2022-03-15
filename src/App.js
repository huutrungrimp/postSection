import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/navComponent/layout/Home";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbarpage from "./component/navComponent/layout/Navbarpage";
import authServices from "./store/services/authServices";

import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./component/navComponent/auth/Login";
import Register from "./component/navComponent/auth/Register";
import Logout from "./component/navComponent/auth/Logout";

import NoPosts from "./component/posts/NoPosts";
import Posts from "./component/posts/Posts";
import Dashboard from "./component/posts/Dashboard";
import PostList from "./component/posts/PostList";
import CreatePost from "./component/posts/CreatePost";
import UpdatePost from "./component/posts/UpdatePost";
import DeletePost from "./component/posts/DeletePost";

import { useSelector } from "react-redux";

function App() {
  const auth = authServices();
  const username = authServices().username;

  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get("https://backend4ds.herokuapp.com/posts/").then((res) => {
      const item = res.data;
      setPosts(item);
    });
  }, []);

  console.log(posts);
  console.log(auth);

  console.log(useSelector((state) => state));

  return (
    <div className="App">
      <Navbarpage />
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/register" element={<Register />} />

          {posts === undefined ? (
            <Route index element={<NoPosts />} />
          ) : (
            <Route path="posts" element={<Posts />}>
              <Route index element={<PostList posts={posts} />} />
              <Route
                path="dashboard"
                element={<Dashboard posts={posts} username={username} />}
              />
              <Route path=":id/update" element={<UpdatePost />} />
              <Route path=":id/delete" element={<DeletePost />} />
              <Route path="createPost" element={<CreatePost />} />
            </Route>
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
