import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { pinkA200, transparent } from 'material-ui/styles/colors';

/**
 * Render compact category on home page
 */
const Category = (props) => {
  const { category } = props;

  return (
    <Link to={`/category/${category.path}`}>
      <ListItem
        primaryText={ category.name }
        leftAvatar={
          <Avatar
            color={pinkA200} backgroundColor={transparent}
            style={{ left: 8 }}
          >
            { category.name[0].toUpperCase() }
          </Avatar>
        }
      />
    </Link>
  )
};

export default Category;