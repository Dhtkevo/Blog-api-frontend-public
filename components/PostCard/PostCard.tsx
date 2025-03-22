import React from "react";

export default function PostCard() {
  return (
    <div className="flex flex-col gap-6 bg-amber-50 max-w-1/3 rounded-3xl px-4 py-2 shadow-md">
      <h2 className="self-center font-bold">Post Title Goes Here</h2>
      <p>Post content Goes here</p>
      <p className="self-center">Time Stamp of Post Goes Here</p>
      <button className="rounded-3xl border-2 hover:cursor-pointer hover:bg-amber-100">
        Leave Comment
      </button>
    </div>
  );
}
