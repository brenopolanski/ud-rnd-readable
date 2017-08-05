const API_URI_BASE = process.env.API_URI_BASE || 'http://localhost:5001';

export const AUTH_TOKEN = process.env.AUTH_TOKEN || 'asdjkfl234324kql5234';

export const API_ENDPOINTS = {
  CATEGORIES: `${API_URI_BASE}/categories`,
  POSTS: `${API_URI_BASE}/posts`,
  CATERGOY_POSTS: (cat) => `${API_URI_BASE}/${cat}/posts`,
  POST: (id) => `${API_URI_BASE}/posts/${id}`,
  COMMENTS: (id) => `${API_URI_BASE}/posts/${id}/comments`,
  COMMENT: (id) => `${API_URI_BASE}/comments/${id}`,
};
