import React from "react";
import {
  BellAlertIcon,
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  UserGroupIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Friends", href: "/friends", icon: UserGroupIcon },
  {
    name: "Saved Posts",
    href: "/saved-posts",
    icon: BookmarkIcon,
  },
  { name: "Notifications", href: "/notifications", icon: BellAlertIcon },
  {
    name: "Logout",
    href: "/logout",
    icon: ArrowLeftOnRectangleIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className='space-y-1 w-full shadow-md' aria-label='Sidebar'>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.href === router.pathname
              ? "bg-socialBlue text-gray-100"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center p-3 text-sm font-medium"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          <item.icon
            className={classNames(
              item.href === router.pathname
                ? "text-gray-100"
                : "text-gray-400 group-hover:text-gray-500",
              "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
            )}
            aria-hidden='true'
          />
          <span className='truncate'>{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
