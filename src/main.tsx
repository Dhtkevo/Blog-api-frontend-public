import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CommentForm from "../components/CommentForm/CommentForm.tsx";
import CommentsContainer from "../components/CommentsContainer/commentsContainer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts/:postId/comments/new" element={<CommentForm />} />
        <Route path="posts/:postId/comments" element={<CommentsContainer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
