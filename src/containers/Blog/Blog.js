import React, { Component } from "react";

import { Route, NavLink, withRouter, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from './FullPost/FullPost'

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    color: "orangered",
                    textDecoration: "underline",
                  }}
                  activeClassName="myActive"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#sumbit ",
                    search: "appearsbeforehash",
                  }}
                >
                  New Posts
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact component={() => {<h1>this must be a function</h1>}} */}
        <Route path="/" exact component={Posts} />
        <Switch>
        {/* // note the order is important as it will take new_post as an id for fulpost */}
        <Route path="/new-post" exact component={NewPost} />
        <Route path="/:id" exact component={FullPost}/>
        
        
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
