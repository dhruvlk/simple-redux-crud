import React, { Component } from "react";
import PostForm from "./PostForm";
import AllPost from "./AllPost.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux-Crud</h1>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}
export default App;
