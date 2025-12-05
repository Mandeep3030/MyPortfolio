import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../pages/Auth/Signup.jsx';
import { createMockLocalStorage } from './test-helpers';

const mockNavigate = jest.fn();
const mockSignup = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  Link: ({ children }) => <a>{children}</a>
}));

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({ signup: mockSignup })
}));

describe('Signup', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockSignup.mockReset();
    Object.defineProperty(window, 'localStorage', {
      value: createMockLocalStorage(),
      writable: true
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('lets the user fill out each field', () => {
    render(<Signup />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/^email$/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(nameInput, { target: { value: 'Student' } });
    fireEvent.change(emailInput, { target: { value: 'student@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(nameInput).toHaveValue('Student');
    expect(emailInput).toHaveValue('student@test.com');
    expect(passwordInput).toHaveValue('123456');
  });

  test('submits the form and navigates home', async () => {
    mockSignup.mockResolvedValue();

    render(<Signup />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Student' } });
    fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'student@test.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });

    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => expect(mockSignup).toHaveBeenCalledWith('Student', 'student@test.com', '123456'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
