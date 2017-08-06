import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import categories from './api/categories/reducers';
import comments from './api/comments/reducer';
import post from './api/post/reducers';
import posts from './api/posts/reducers';
import votePost from './api/votePost/reducers';
import categoryPosts from './api/categoryPosts/reducers';

import modalDialog from './containers/PostFormModal/reducers';

export default combineReducers({
  form: formReducer,
  categories,
  comments,
  post,
  posts,
  categoryPosts,
  votePost,
  modalDialog
});