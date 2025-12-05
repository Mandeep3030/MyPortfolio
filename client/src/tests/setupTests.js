// This file runs before each Jest test suite so we can register shared helpers.
import '@testing-library/jest-dom'; // Adds user-friendly DOM matchers (e.g., toBeInTheDocument).

// Polyfills required by React Router in Jest environment
if (typeof global.TextEncoder === 'undefined') {
	const { TextEncoder, TextDecoder } = require('util');
	global.TextEncoder = TextEncoder;
	if (typeof global.TextDecoder === 'undefined') {
		global.TextDecoder = TextDecoder;
	}
}

