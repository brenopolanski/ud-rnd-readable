import { combineReducers } from 'redux';
import categories from './api/categories/reducers';
import posts from './api/posts/reducers';

export default combineReducers({
  categories,
  posts
});