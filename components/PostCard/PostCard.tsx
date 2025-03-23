import React from "react";
import { Link } from "react-router";

interface postCardProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function PostCard({
  id,
  title,
  content,
  createdAt,
}: postCardProps) {
  return (
    <div className="flex flex-col gap-6 bg-amber-50 max-w-1/3  px-4 py-4 shadow-md rounded-md">
      <h2 className="self-center font-bold">{title}</h2>
      <p>{content}</p>
      <p className="self-center">{createdAt}</p>
      <div className="flex flex-col gap-2">
        <button className="border-2 rounded-3xl hover:cursor-pointer hover:bg-amber-100">
          <Link to={`/posts/${id}/comments/`}> View Comments</Link>
        </button>
        <button className="border-2 rounded-3xl hover:cursor-pointer hover:bg-amber-100">
          <Link to={`/posts/${id}/comments/new`}> Leave Comment</Link>
        </button>
      </div>
    </div>
  );
}
