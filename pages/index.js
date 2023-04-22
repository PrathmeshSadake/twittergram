import React from "react";
import Navigation from "./components/Navigation";
import PostForm from "./components/PostForm";
import Post from "./components/Post";

const Home = () => {
  return (
    <div className='flex mt-4 mx-auto gap-6 max-w-5xl'>
      <div className='w-1/3'>
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
