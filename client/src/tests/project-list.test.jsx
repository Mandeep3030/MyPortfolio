import { render, screen } from '@testing-library/react';
import Projects from '../pages/Projects/Projects';

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({ token: 'token-1', user: { role: 'user' } })
}));

describe('Projects (list)', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows a friendly message when no projects exist', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });

    render(<Projects />);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/projects');
    expect(await screen.findByText(/no projects found/i)).toBeInTheDocument();
  });

  test('renders each project returned by the API', async () => {
    const mockProjects = [
      {
        _id: '1',
        title: 'Portfolio',
        description: 'Class app',
        completion: '2025-02-01T00:00:00.000Z'
      }
    ];

    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => mockProjects });

    render(<Projects />);

    expect(await screen.findByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Class app')).toBeInTheDocument();
  });
});
