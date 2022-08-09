import React, { Component } from "react";
import { connect } from "react-redux";

class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };

    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={input => (this.getTitle = input)}
            required
            type="text"
            name="text"
            placeholder="Enter Your Name"
          />
          <br />
          <br />
          <input
            ref={input => (this.getMessage = input)}
            required
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
