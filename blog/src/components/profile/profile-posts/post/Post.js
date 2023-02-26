import React from "react";

const Post = (props) => {
  return (
    <div className="Post">
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  );
};

export default Post;
