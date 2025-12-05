import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Projects from '../pages/Projects/Projects';

const adminAuth = { token: 'admin-token', user: { role: 'admin' } };

jest.mock('../context/AuthContext', () => ({
  useAuth: () => adminAuth
}));

describe('Projects (admin create)', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows the create form for admins', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });
    render(<Projects />);

    expect(await screen.findByText(/add new project/i)).toBeInTheDocument();
  });

  test('submits new project to the API', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ _id: '1' }) });
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });

    render(<Projects />);

    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Portfolio' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Class app' } });
    fireEvent.click(screen.getByRole('button', { name: /create project/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/projects', expect.objectContaining({ method: 'POST' }));
    });
  });
});
