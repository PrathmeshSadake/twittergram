import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className='flex mt-4 mx-auto gap-6 max-w-4xl'>
      <div className='w-4/12'>
        <Navigation />
      </div>
      <div className='w-full flex flex-col gap-6'>{children}</div>
    </div>
  );
};

export default Layout;
