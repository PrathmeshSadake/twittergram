"use client";
import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const CreatePost = () => {
  return (
    <div className='flex items-start space-x-4 my-6'>
      <div className='flex-shrink-0'>
        <img
          className='inline-block h-10 w-10 rounded-full'
          src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
      </div>
      <div className='min-w-0 flex-1'>
        <form className='relative'>
          <div className='overflow-hidden border-b-2 shadow-sm'>
            <label htmlFor='comment' className='sr-only'>
              What&apos;s on your mind?
            </label>
            <textarea
              rows={3}
              name='comment'
              id='comment'
              className='px-3 block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm'
              placeholder='What&apos;s on your mind?'
              defaultValue={""}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className='py-2' aria-hidden='true'>
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className='py-px'>
                <div className='h-9' />
              </div>
            </div>
          </div>

          <div className='bg-white absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2'>
            <div className='flex items-center space-x-5'>
              <div className='flex items-center'>
                <button
                  type='button'
                  className='-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500'
                >
                  <PaperClipIcon className='h-5 w-5' aria-hidden='true' />
                  <span className='sr-only'>Attach a file</span>
                </button>
              </div>
            </div>
            <div className='flex-shrink-0'>
              <button
                type='submit'
                className='inline-flex items-center border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
