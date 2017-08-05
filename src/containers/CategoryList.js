import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { pinkA200, transparent } from 'material-ui/styles/colors';

import { fetchCategories } from '../api/categories/actions';
import Category from '../components/Category';

/**
 * Home Page
 */
class CategoryList extends React.Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;

    const mappedCat = categories && categories.length
      ? categories.map((cat, i) => <Category category={cat} key={i} />)
      : 'No categories';

    return (
      <div>
        {
          mappedCat && mappedCat.length
            ? <List>{mappedCat}</List>
            : 'No Categories'
        }
      </div>
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
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);