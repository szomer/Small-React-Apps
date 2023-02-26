import React, { Component } from "react";
import "./profile.css";
import { Route, Routes, HashRouter } from "react-router-dom";

import Header from "./profile-header/Header";
import Posts from "./profile-posts/Posts";
import AddPost from "./profile-add-post/AddPost";
import About from "./profile-about/About";
import PostView from "./profile-posts/post/post-view/PostView";
import Footer from "../footer/Footer";
import ScrollButton from "./../scroll-button/ScrollButton";
import "./profile-page-background";

class Profile extends Component {
  render() {
    return (
      <HashRouter>
        <div className="Profile">
          <div className="wrapper">
            <Header />
            <div className="page-content">
              <Routes>
                <Route exact path="/" element={<Posts />} />
                <Route exact path="/posts" element={<Posts />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/addpost" element={<AddPost />} />
                <Route exact path="/post" element={<PostView />} />
              </Routes>
            </div>
            <Footer />
          </div>
          <ScrollButton />
        </div>
      </HashRouter>
    );
  }
}

export default Profile;
