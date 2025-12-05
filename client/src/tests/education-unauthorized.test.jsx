import { render, screen, fireEvent } from '@testing-library/react';
import Education from '../pages/Education/Education.jsx';

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({ token: 'token-1', user: { role: 'user' } })
}));

describe('Education (authorization)', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('non-admins cannot see or submit create form', async () => {
    render(<Education />);

    // List renders
    expect(await screen.findByText(/education list/i)).toBeInTheDocument();

    // Create form should not be present for non-admin
    expect(screen.queryByText(/add new education/i)).not.toBeInTheDocument();

    // Even if trying to submit (no button), ensure no POSTs happen
    expect(global.fetch).toHaveBeenCalledTimes(1); // only initial GET
  });
});
