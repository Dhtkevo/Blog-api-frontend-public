interface CommentCardProps {
  content: string;
  createdAt: string;
}

export default function CommentCard({ content, createdAt }: CommentCardProps) {
  return (
    <div className="flex flex-col gap-6 bg-amber-50 max-w-1/3  px-4 py-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold">Anonymous User</h2>
      <p className="text-lg">{content}</p>
      <p className="text-lg">{createdAt}</p>
    </div>
  );
}
