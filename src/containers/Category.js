import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts, changeCategory } from '../api/categoryPosts/actions';
import { fetchCategories } from '../api/categories/actions';

import CategorySelect from '../components/CategorySelect';
import Posts from '../components/Posts';

/**
 * Show posts from a selected category
 */
class Category extends React.Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  componentWillReceiveProps(nextProps) {
    const { category } = this.props.posts;

    // set a default category after categories are fetched
    !nextProps.posts.category && nextProps.categories.fetched
      && this.props.changeCategory(nextProps.categories.categories[0].name);

    // fetch posts if selected category changes
    const newCategory = nextProps.posts.category;
    if (newCategory && category !== newCategory) {
      this.props.fetchPosts(newCategory);
    }
  }

  changeCategory = (e, i, value) => {
    this.props.changeCategory(value);
  }

  render() {
    const { categories, posts } = this.props;

    return (
      <div>
        <CategorySelect
          categories={categories.categories}
          changeOption={this.changeCategory}
          selected={posts.category}
        />

        <Posts
          posts={posts.posts}
          sort={posts.sort}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ categoryPosts, categories }) => {
  return {
    categories: {
      categories: categories.categories,
      fetching: categories.fetching,
      fetched: categories.fetched,
      error: categories.error
    },

    posts: {
      posts: categoryPosts.posts,
      category: categoryPosts.category,
      sort: categoryPosts.sort,
      fetching: categoryPosts.fetching,
      fetched: categoryPosts.fetched,
      error: categoryPosts.error
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: (category) => dispatch(fetchPosts(category)),
    changeCategory: (category) => dispatch(changeCategory(category)),
    // changeSortOption: (option) => dispatch(changeSortOption(option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);