import React, { Component } from "react";
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    SelectedPostId: null,
    error: false
  };
  componentDidMount() {
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
        this.setState({error: true})
      });
  }

  selectedPostHandler = (id) => {
    this.setState({
      SelectedPostId: id,
    });
  };

  render() {
    let Posts = <p>Something went wrong</p> 
    if (!this.state.error) {
        Posts = this.state.posts.map((post) => {
            return (
              <Post
                key={post.id}
                title={post.title}
                author={post.Author}
                clicked={() => {
                  this.selectedPostHandler(post.id);
                }}
              />
            );
          });
    }
    
    return (
      <div>
        <section className="Posts">{Posts}</section>
        <section>
          <FullPost id={this.state.SelectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
