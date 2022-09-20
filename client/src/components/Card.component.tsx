import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FakePosts } from "../data/data";

interface IProps {
  post: FakePosts;
}

const Card: FC<IProps> = ({ post }) => {
  return (
    <div className="card">
      <Link to={`/posts/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="post img" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
