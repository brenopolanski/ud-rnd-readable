import React from 'react';
import CategoryList from './CategoryList';
import AllPostList from './AllPostList';

/**
 * Home Page
 */
const Home = () => {
  return (
    <div>
      <CategoryList />
      <AllPostList />
    </div>
  )
}

export default Home