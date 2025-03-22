import React from "react";
import PostCard from "../PostCard/PostCard";

export default function PostsContainer() {
  return (
    <div className="flex flex-col gap-4 border-2 border-red-600 h-screen px-14 py-6 bg-gray-200">
      <h1 className="text-4xl font-bold self-center">Kevin's Blog Posts</h1>
      <div>
        <PostCard />
      </div>
    </div>
  );
}
