import React, { Component } from "react";
import { connect } from "react-redux";
class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            name="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post.title}
            placeholder="Enter Your Name"
          />
          <br />
          <br />
          <input
            required
            type="email"
            name="email"
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.post.message}
            placeholder="Enter Your Email"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
