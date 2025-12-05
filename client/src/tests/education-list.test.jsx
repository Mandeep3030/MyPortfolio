import { render, screen } from '@testing-library/react';
import Education from '../pages/Education/Education.jsx';

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({ token: 'token-1', user: { role: 'user' } })
}));

describe('Education (list/read)', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows empty state when no records', async () => {
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });

    render(<Education />);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/qualifications');
    expect(await screen.findByText(/no records found/i)).toBeInTheDocument();
  });

  test('renders rows for returned qualifications', async () => {
    const mockData = [
      {
        _id: 'q1',
        title: 'Bachelor of Science',
        firstname: 'Alice',
        lastname: 'Smith',
        email: 'alice@example.com',
        completion: '2024-05-30T00:00:00.000Z',
        description: 'Major in CS'
      }
    ];

    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => mockData });

    render(<Education />);

    expect(await screen.findByText('Bachelor of Science')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Smith')).toBeInTheDocument();
    expect(screen.getByText('alice@example.com')).toBeInTheDocument();
    expect(screen.getByText(/major in cs/i)).toBeInTheDocument();
  });
});
