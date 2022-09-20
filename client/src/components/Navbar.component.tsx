import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface IProps {
  user: boolean;
}
const Navbar: FC<PropsWithChildren<IProps>> = ({ user }) => {
  return (
    <div className="Navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App{" "}
        </Link>
      </span>
      {user && (
        <ul className="list">
          <li className="listItem">
            <img src="" className="avatar" alt="" />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
