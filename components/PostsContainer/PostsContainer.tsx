import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";

interface Posts {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function PostsContainer() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  const postItems = posts.map((post) => (
    <PostCard
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content}
      createdAt={post.createdAt}
    />
  ));

  return (
    <div className="flex flex-col gap-4 h-screen px-14 py-6 bg-gray-200">
      <h1 className="text-4xl font-bold self-center">Kevin's Blog Posts</h1>
      <div className="flex gap-2">{postItems}</div>
    </div>
  );
}
