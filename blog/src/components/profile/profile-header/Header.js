import React, { Component } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import wallpaper from "./wallpaper.jpg";
import avatar from "./avatar.jpg";
import "./profile-header-background";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="Header">
        <div className="header-top">
          <img src={wallpaper}></img>
        </div>
        <div className="header-bottom">
          <div className="header-avatar">
            <img className="header-avatar-top" src={avatar}></img>
            <span>UserName</span>
          </div>
          <div className="header-links">
            <NavLink
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/posts"
            >
              POSTS
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/addpost"
            >
              NEW
            </NavLink>
          </div>
          <div className="header-status-message">Welcome to my page.</div>
        </div>
      </div>
    );
  }
}

export default Header;
