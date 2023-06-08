import React from "react";
import Header from "../components/Header";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";

const Home = () => {
  return (
    <div>
      <Header label='Home' />
      <Form placeholder="What's happening?" />
      <PostFeed />
    </div>
  );
};

export default Home;
