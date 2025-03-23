import React from "react";

interface postCardProps {
  title: string;
  content: string;
  createdAt: string;
}

export default function PostCard({ title, content, createdAt }: postCardProps) {
  return (
    <div className="flex flex-col gap-6 bg-amber-50 max-w-1/3 rounded-3xl px-4 py-2 shadow-md">
      <h2 className="self-center font-bold">{title}</h2>
      <p>{content}</p>
      <p className="self-center">{createdAt}</p>
      <button className="rounded-3xl border-2 hover:cursor-pointer hover:bg-amber-100">
        Leave Comment
      </button>
    </div>
  );
}
