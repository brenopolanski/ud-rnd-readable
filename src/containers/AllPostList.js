import React from 'react';
import { connect } from 'react-redux';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { fetchPosts, changeSortOption } from '../api/posts/actions';
import Posts from '../components/Posts';
import PostOverview from '../components/PostOverview';
import {formatText} from '../utils';


/**
 * All Post List on home page
 */
class AllPostList extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  changeSortOption = (e, i, value) => {
    this.props.changeSortOption(value);
  }

  render() {
    const { posts, sort } = this.props;

    return (

      <div>
        <Posts
          posts={posts}
          sort={sort}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts,
    sort: posts.sort,
    fetching: posts.fetching,
    fetched: posts.fetched,
    error: posts.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    changeSortOption: (option) => dispatch(changeSortOption(option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPostList);