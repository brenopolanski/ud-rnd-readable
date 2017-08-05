import React from 'react';
import { connect } from 'react-redux';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import { fetchCategories } from '../api/categories/actions';
import Category from '../components/Category';


/**
 * Category List on home page
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
            ? <List>
                <Subheader>CATEGORIES</Subheader>
                {mappedCat}
              </List>
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