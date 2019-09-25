import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUser } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUser();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="discription">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}></UserHeader>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return <div className="ui relaxed divided list"> {this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostAndUser }
)(PostList);
