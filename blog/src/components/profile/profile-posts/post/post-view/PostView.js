import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import ReturnHomeButton from "../../../../return-home-button/ReturnHomeButton";
import Post from "../Post";
import "./post-view.css";

const PostView = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div className="ViewPost">
      <ReturnHomeButton />
      <div className="post-wrapper">
        <div className="view-post-component">
          <Post post={state.post} />
        </div>

        <div className="post-controls">
          <button>Save</button>
          12 Jan 2022
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default PostView;
