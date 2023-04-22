import React from "react";
import Avatar from "./Avatar";

const PostForm = () => {
  return (
    <div className='p-3 shadow-md'>
      <form>
        <div class='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50'>
          <div class='flex gap-3 px-4 py-3 bg-white rounded-t-lg'>
            <Avatar />
            <textarea
              id='comment'
              rows='2'
              class='w-full p-2 text-sm text-gray-900 bg-white border-0 focus:ring-0'
              placeholder={`What's on your mind?`}
              required
            ></textarea>
          </div>
          <div class='flex items-center justify-between px-3 py-2 border-t'>
            <div class='flex pl-0 space-x-1 sm:pr-2'>
              <button
                type='button'
                class='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                  />
                </svg>

                <span class='sr-only'>People</span>
              </button>
              <button
                type='button'
                class='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                  />
                </svg>
                <span class='sr-only'>Check In</span>
              </button>
              <button
                type='button'
                class='inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
                  />
                </svg>
                <span class='sr-only'>Mood</span>
              </button>
            </div>
            <button
              type='submit'
              class='inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-socialBlue rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'
            >
              Share
            </button>
          </div>
        </div>
      </form>
      <p class='ml-auto text-xs text-gray-500'>
        Remember, follow our{" "}
        <a href='#' class='text-blue-600 dark:text-blue-500 hover:underline'>
          Community Guidelines
        </a>
        .
      </p>
    </div>
  );
};

export default PostForm;
