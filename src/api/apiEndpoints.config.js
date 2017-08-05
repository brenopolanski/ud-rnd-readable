const API_URI_BASE = process.env.API_URI_BASE || 'localhost:5001';

export const AUTH_TOKEN = process.env.AUTH_TOKEN || 'asdjkfl234324kql5234';

export const API_ENDPOINTS = {
  BASE: API_URI_BASE,
  CATEGORIES: `${BASE}/categories`
};
