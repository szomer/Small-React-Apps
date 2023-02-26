import React, { Component } from "react";
import "./add-post.css";

class AddPost extends Component {
  componentDidMount() {
    window.scrollTo(0, parseInt(0, 0));
  }

  render() {
    return (
      <div className="AddPost">
        <div className="add-post-wrapper">
          <h1>New Post</h1>
          <textarea name="w3review" rows="15" cols="60"></textarea>
        </div>
      </div>
    );
  }
}

export default AddPost;
