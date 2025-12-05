// Central API base URL for both dev and production
// - In dev (Vite on 5173), default to hitting backend at 3000
// - In prod (served by Express), use same-origin with relative paths
const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : '');

export default API_BASE;
