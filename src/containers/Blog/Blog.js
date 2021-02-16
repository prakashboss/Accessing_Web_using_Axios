import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from './NewPost/NewPost'

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/new-post',
                  hash: '#sumbit ',
                  search: 'appearsbeforehash'
                }}>New Posts</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact component={() => {<h1>this must be a function</h1>}} */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
