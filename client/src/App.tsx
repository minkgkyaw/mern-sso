import React, { FC, useEffect, useState } from "react";
import Navbar from "./components/Navbar.component";
import "./App.css";
import HomePage from "./pages/Home.page";
import PostPage from "./pages/Post.page";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.page";

const App: FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route index={true} element={<HomePage />} />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <LoginPage />}
        />
        <Route
          path="/posts/:id"
          element={!user ? <Navigate to={"/login"} /> : <PostPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
