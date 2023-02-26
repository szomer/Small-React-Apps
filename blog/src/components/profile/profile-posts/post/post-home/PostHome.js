import React from "react";
import { NavLink } from "react-router-dom";
import Post from "../Post";
import "./post-home.css";

const PostHome = (props) => {
  return (
    <div className="PostHome">
      <NavLink
        onClick={props.onViewPost}
        className="post-link"
        state={{ post: props.post }}
        to={`/post`}
      >
        <div className="post-home-post">
          <div className="post-component">
            <Post post={props.post} />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default PostHome;
