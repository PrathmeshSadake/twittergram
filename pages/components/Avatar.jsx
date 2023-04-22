import React from "react";

const Avatar = ({ size }) => {
  let width = "w-12";
  if (size == "lg") width = "w-24";
  return (
    <img
      class={`${width} rounded-full`}
      src='https://source.unsplash.com/iEEBWgY_6lA'
      alt='Rounded avatar'
    />
  );
};

export default Avatar;
