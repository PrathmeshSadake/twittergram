"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <button
      onClick={() => signIn()}
      className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
    >
      Sign In
    </button>
  );
}
