import React from "react";
import Navigation from "./components/Navigation";
import PostForm from "./components/PostForm";
import Post from "./components/Post";

const Home = () => {
  return (
    <div className='flex mt-4 mx-auto gap-6 max-w-4xl'>
      <div className='w-4/12'>
        <Navigation />
      </div>
      <div className='w-full flex flex-col gap-6'>
        <PostForm />
        <Post />
      </div>
    </div>
  );
};

export default Home;
