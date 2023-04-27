import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { signIn } from "next-auth/react";
import Login from "./auth/Login";
import Logged from "./auth/Logged";
import Link from "next/link";

export default async function Nav() {
  const session = await unstable_getServerSession(authOptions);

  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <Link href={"/"} className='flex flex-shrink-0 items-center'>
              <img
                className='block h-8 w-auto lg:hidden'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='twittergram'
              />
              <img
                className='hidden h-8 w-auto lg:block'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='twittergram'
              />
            </Link>
          </div>

          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='relative ml-3'>
              {session?.user ? (
                <Logged image={session.user.image || ""} />
              ) : (
                <Login />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
