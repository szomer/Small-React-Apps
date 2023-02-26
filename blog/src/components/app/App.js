import React, { Component } from "react";
import { Routes, HashRouter, Route } from "react-router-dom";
import "./app.css";

import Footer from "../footer/Footer";
import Header from "../header/Header";

import Home from "../home/Home";
import Login from "../home/login/Login";
import Signup from "../home/signup/Signup";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="wrapper">
            <Header />
            <div className="content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}
export default App;
