"use client";

import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();
  let toastPostID: string;

  //Create a post
  const { mutate } = useMutation(
    async (title: string) =>
      await axios.post("/api/posts/addPost", {
        title,
      }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastPostID });
        }
        setIsDisabled(false);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Post has been made 🔥", { id: toastPostID });
        setTitle("");
        setIsDisabled(false);
      },
    }
  );
  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    toastPostID = toast.loading("Creating your post", { id: toastPostID });
    mutate(title);
  };

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
        <form onSubmit={submitPost} className='relative'>
          <div className='overflow-hidden border-b-2 shadow-sm'>
            <label htmlFor='comment' className='sr-only'>
              What&apos;s on your mind?
            </label>
            <textarea
              rows={3}
              className='px-3 block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm'
              placeholder="What's on your mind?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              <p
                className={`font-semibold text-sm ${
                  title.length > 300 ? "text-red-700" : "text-gray-700"
                } `}
              >{`${title.length}/300`}</p>
            </div>
            <div className='flex-shrink-0'>
              <button
                type='submit'
                disabled={title.length > 300 || isDisabled}
                className='inline-flex items-center border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:bg-gray-400'
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
