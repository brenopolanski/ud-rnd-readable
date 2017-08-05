import { combineReducers } from 'redux';
import categories from './api/categories/reducers';
import posts from './api/posts/reducers';
import categoryPosts from './api/categoryPosts/reducers';

export default combineReducers({
  categories,
  posts,
  categoryPosts
});