import React from 'react';
import CategoryList from './CategoryList';
import AllPostList from './AllPostList';
import NewPost from '../containers/NewPost';

/**
 * Home Page
 */
const Home = () => {
  return (
    <div>
      <CategoryList />
      <NewPost />
      <AllPostList />
    </div>
  )
}

export default Home