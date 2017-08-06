import React from 'react';
import { connect } from 'react-redux';

import Posts from '../components/Posts';
import { fetchPosts, changeSortOption } from '../api/posts/actions';
import { votePost } from '../api/votePost/actions';


/**
 * All Post List on home page
 */
class AllPostList extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    const { updating } = this.props;
    const nextUpdating = nextProps.updating;
    const nextUpdated = nextProps.updated;

    // re-fetch posts if vote is successfully updated
    ( updating && !nextUpdating && nextUpdated )
      && this.props.fetchPosts();
  }

  changeSortOption = (e, i, value) => {
    this.props.changeSortOption(value);
  }

  votePost = (id, vote) => {
    this.props.votePost(id, vote);
  }

  render() {
    const { posts, sort } = this.props;

    return (

      <div>
        <Posts
          posts={posts}
          sort={sort}
          votePost={this.votePost}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ posts, votePost }) => {
  return {
    posts: posts.posts,
    sort: posts.sort,
    fetching: posts.fetching,
    fetched: posts.fetched,
    error: posts.error,

    updating: votePost.updating,
    updated: votePost.updated,
    voteError: votePost.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    changeSortOption: (option) => dispatch(changeSortOption(option)),
    votePost: (id, vote) => dispatch(votePost(id, vote))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPostList);