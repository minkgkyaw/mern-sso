import React, { FC } from "react";
import Navbar from "./components/Navbar.component";
import "./App.css";
import HomePage from "./pages/Home.page";
import PostPage from "./pages/Post.page";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.page";

const App: FC = () => {
  const user = true;
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
