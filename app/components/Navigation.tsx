import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import Login from "./Login";
import Logout from "./Logout";

export default async function Navigation() {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
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
            </div>
          </div>

          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='relative ml-3'>
              {session?.user ? (
                <Logout image={session.user.image || ""} />
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
