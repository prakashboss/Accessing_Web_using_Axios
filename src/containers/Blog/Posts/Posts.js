import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import {Link} from 'react-router-dom'

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        // console.log(response)
        const Posts = response.data.slice(0, 4);
        const updatedPost = Posts.map((post) => {
          return {
            ...post,
            Author: "Prakash",
          };
        });
        this.setState({
          posts: updatedPost,
        });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({error: true})
      });
  }

  selectedPostHandler = (id) => {
    this.setState({
      SelectedPostId: id,
    });
  };

  render() {
    let Posts = <p>Something went wrong</p>;
    if (!this.state.error) {
      Posts = this.state.posts.map((post) => {
        return (
          <Link to={"/" + post.id} key={post.id}>
            <Post
              
              title={post.title}
              author={post.Author}
              clicked={() => {
                this.selectedPostHandler(post.id);
              }}
            />
          </Link>
        );
      });
    }

    return <section className="Posts">{Posts}</section>;
  }
}

export default Posts;
