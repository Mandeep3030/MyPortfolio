import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Education from '../pages/Education/Education.jsx';

const adminAuth = { token: 'admin-token', user: { role: 'admin' } };

jest.mock('../context/AuthContext', () => ({
  useAuth: () => adminAuth
}));

describe('Education (admin create)', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows create form and posts new education', async () => {
    // Initial load: no qualifications
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => [] });
    // Create POST response
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ _id: 'edu-1' }) });
    // Reload list after creation
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          _id: 'edu-1',
          title: 'Diploma',
          firstname: 'Student',
          lastname: 'Test',
          email: 'student@test.com',
          completion: '2025-06-01T00:00:00.000Z',
          description: 'Completed program'
        }
      ]
    });

    render(<Education />);

    // Admin form is visible
    expect(await screen.findByText(/add new education/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Diploma' } });
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'Student' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'student@test.com' } });
    fireEvent.change(screen.getByLabelText(/completion/i), { target: { value: '2025-06-01' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Completed program' } });

    fireEvent.click(screen.getByRole('button', { name: /create education/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/api/qualifications',
        expect.objectContaining({ method: 'POST' })
      );
    });

    // After re-fetch, new record should be visible
    expect(await screen.findByText('Diploma')).toBeInTheDocument();
    expect(screen.getByText('Student')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('student@test.com')).toBeInTheDocument();
    expect(screen.getByText(/completed program/i)).toBeInTheDocument();
  });
});
