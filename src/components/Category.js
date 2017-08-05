import React from 'react';

/**
 * Render compact category on home page
 */
const Category = (props) => {
  const { category } = props;

  return (
    <div>
      { category.name }
    </div>
  )
}

export default Category;