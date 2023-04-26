"use client";
import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
  image: string;
};

const Logout = ({ image }: User) => {
  return (
    <div className='flex space-x-3'>
      <button
        onClick={() => signOut()}
        className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
      >
        Logout
      </button>
      <Link href={"/dashboard"}>
        <Image
          width={24}
          height={24}
          className='w-10 rounded-full'
          src={image}
          alt=''
          priority
        />
      </Link>
    </div>
  );
};

export default Logout;
