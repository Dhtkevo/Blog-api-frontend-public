import { useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";

interface Comments {
  id: number;
  content: string;
  createdAt: string;
  postId: number;
}

export default function CommentsContainer() {
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((response) => setComments(response));
  }, []);

  const commentItems = comments.map((comment) => (
    <CommentCard
      key={comment.id}
      content={comment.content}
      createdAt={comment.createdAt}
    />
  ));

  return (
    <div className="flex flex-col gap-4 h-screen px-14 py-6 bg-gray-200">
      <h1 className="text-4xl font-bold self-center">Comments</h1>
      <div className="flex gap-2">{commentItems}</div>
    </div>
  );
}
