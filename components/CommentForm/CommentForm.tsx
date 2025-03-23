import React from "react";
import { useParams } from "react-router";

export default function CommentForm() {
  const params = useParams();

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-64">Replying to: </h1>
      <form method="POST" action="http://localhost:3000/">
        <div className="flex flex-col gap-4 shadow-2xl border-gray-400 border p-6 rounded-2xl">
          <label htmlFor="commentContent">Comment Content: </label>
          <input className="bg-white rounded-2xl p-2" type="text" required />
          <button className="border-black border min-w-2xl self-center rounded-2xl hover:bg-gray-300 hover:cursor-pointer shadow-xl">
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}
