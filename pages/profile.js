import React from "react";
import Layout from "./components/Layout";
import Avatar from "./components/Avatar";
import Link from "next/link";
import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import Post from "./components/Post";

const tabs = [
  { name: "Posts", href: "#", icon: UserIcon, current: false },
  { name: "About", href: "#", icon: BuildingOfficeIcon, current: false },
  { name: "Friends", href: "#", icon: UsersIcon, current: true },
  { name: "Photos", href: "#", icon: CreditCardIcon, current: false },
];

const Profile = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Layout>
      <div className='shadow-md bg-white'>
        <div className='relative h-48 flex justify-center items-center overflow-hidden'>
          <img
            src='https://source.unsplash.com/DkH_rkB4EIk'
            alt='Waterfalls and Northern Lights'
          />
          <div className='absolute top-12 left-6'>
            <Avatar size={"lg"} />
          </div>
        </div>

        <div className='p-4'>
          <h1 className='font-semibold'>Prathmesh Sadake</h1>
          <div className='sm:hidden'>
            <label htmlFor='tabs' className='sr-only'>
              Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
              id='tabs'
              name='tabs'
              className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className='hidden sm:block'>
            <nav className='flex space-x-4' aria-label='Tabs'>
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  <tab.icon
                    className={classNames(
                      tab.current
                        ? "text-indigo-500"
                        : "text-gray-400 group-hover:text-gray-500",
                      "-ml-0.5 mr-2 h-5 w-5"
                    )}
                    aria-hidden='true'
                  />
                  <span>{tab.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className='shadow-md bg-white'>
        <Post />
      </div>
    </Layout>
  );
};

export default Profile;
