import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Prakash",
  };

  componentDidMount() {
    console.log(this.props);
  }

  postDataHandler = () => {
    const dataSent = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    axios.post("/posts", dataSent).then((response) => console.log(response));
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="5"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="prakash">Prakash</option>
          <option value="Boss">Boss</option>
        </select>
        {this.state.title === "" && this.state.content === "" ? (
          <button disabled>Please fill the form</button>
        ) : (
          <button onClick={this.postDataHandler}>Add Post</button>
        )}
      </div>
    );
  }
}

export default NewPost;
