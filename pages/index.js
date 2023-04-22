import React from "react";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import Layout from "./components/Layout";

const Home = () => {
  return (
    <Layout>
      <PostForm />
      <Post />
    </Layout>
  );
};

export default Home;
