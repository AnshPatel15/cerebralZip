// API configuration
export const API_BASE_URL = 'https://3.111.196.92:8020/api/v1';

// Helper function for API calls
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  return fetch(url, options);
};
