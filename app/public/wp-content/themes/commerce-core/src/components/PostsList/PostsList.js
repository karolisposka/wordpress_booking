import React from "react";
import PostCard from "../PostCard/PostCard";

export default function PostsList() {
  return (
    <div className="posts-list">
      <div className="posts-list-wrap">
        <h1 className="posts-list-title">Luxury hotels in New York</h1>
        <PostCard />
      </div>
    </div>
  );
}
