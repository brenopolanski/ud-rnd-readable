const API_URI_BASE = process.env.API_URI_BASE || 'http://localhost:5001';

export const AUTH_TOKEN = process.env.AUTH_TOKEN || 'asdddjdkfl23432d4kql5234';

export const API_ENDPOINTS = {
  CATEGORIES: `${API_URI_BASE}/categories`,
  POSTS: `${API_URI_BASE}/posts`,
  CATEGORY_POSTS: '',
  setCategoryPostsURI: function(cat) {
    this.CATEGORY_POSTS = `${API_URI_BASE}/${cat}/posts`;
  },
  POST: '',
  setPostURI: function(id) {
    this.POST = `${API_URI_BASE}/posts/${id}`;
  },
  COMMENTS: '',
  setCommentsURI: function(id) {
    this.COMMENTS = `${API_URI_BASE}/posts/${id}/comments`;
  },
  COMMENT: '',
  setCommentURI: function(id) {
    this.COMMENT = `${API_URI_BASE}/comments/${id}`;
  }
};

export const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': AUTH_TOKEN,
}