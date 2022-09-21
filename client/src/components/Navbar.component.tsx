import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface IProps {
  user: any;
}
const Navbar: FC<PropsWithChildren<IProps>> = ({ user }) => {
  const logout = () =>
    window.open("http://localhost:3000/auth/logout", "_self");
  return (
    <div className="Navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} className="avatar" alt="" />
          </li>
          <li className="listItem">{user?.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <ul className="list">
          <li className="listItem">
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
