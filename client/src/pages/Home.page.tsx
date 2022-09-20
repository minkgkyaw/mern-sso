import React, { FC, PropsWithChildren } from "react";
import Card from "../components/Card.component";
import { posts } from "../data/data";

interface IProps {}
const HomePage: FC<PropsWithChildren<IProps>> = () => {
  return (
    <div className="home">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
