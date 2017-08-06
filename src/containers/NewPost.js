import React from 'react';
import { connect } from 'react-redux';

import PostFormModal from './PostFormModal';

import { fetchCategories } from '../api/categories/actions';
import { newPost } from '../api/post/actions';
import { guid } from '../utils';


class NewPost extends React.Component {
  componentWillMount() {
    !this.props.fetching && !this.props.fetched
      && this.props.fetchCategories();
  }

  newPost = (post) => {
    post.id = guid();
    post.timestamp = Date.now();
    console.log(post);

    this.props.newPost(post);
  }

  render() {
    const { categories } = this.props;

    return (
      <PostFormModal
        label="New Post"
        handleSubmit={this.newPost}
        categories={categories}
      />
    )
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    fetching: categories.fetching,
    fetched: categories.fetched,
    error: categories.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    newPost: (post) => dispatch(newPost(post))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost);