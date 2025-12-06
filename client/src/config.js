// Central API base URL for both dev and production
// - In dev (Vite on 5173), default to hitting backend at 3000
// - In prod (served by Express), use same-origin with relative paths
let API_BASE = '';

// Try to read Vite env without using a literal `import.meta`
// This keeps Jest/CommonJS parsers happy.
try {
  const getEnv = Function('return import.meta && import.meta.env');
  const env = getEnv();
  if (env && env.VITE_API_BASE_URL) {
    API_BASE = env.VITE_API_BASE_URL;
  }
} catch (_) {
  // ignore: not running under Vite/ESM
}

// Jest/Node fallback via process.env
if (!API_BASE && typeof process !== 'undefined' && process.env && process.env.VITE_API_BASE_URL) {
  API_BASE = process.env.VITE_API_BASE_URL;
}

// Fallback based on window hostname
if (!API_BASE) {
  const isBrowser = typeof window !== 'undefined';
  const isLocalhost = isBrowser && window.location && window.location.hostname === 'localhost';
  API_BASE = isLocalhost ? 'http://localhost:3000' : '';
}

export default API_BASE;
