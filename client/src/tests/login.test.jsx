import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signin from '../pages/Auth/Signin';
import { createMockLocalStorage } from './test-helpers';

const mockNavigate = jest.fn();
const mockSignin = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}));

jest.mock('../context/AuthContext', () => ({
  useAuth: () => ({ signin: mockSignin })
}));

describe('Signin', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockSignin.mockReset();
    Object.defineProperty(window, 'localStorage', {
      value: createMockLocalStorage(),
      writable: true
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('updates the inputs as the user types', () => {
    render(<Signin />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'student@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    expect(emailInput).toHaveValue('student@test.com');
    expect(passwordInput).toHaveValue('123456');
  });

  test('submits credentials and navigates on success', async () => {
    mockSignin.mockResolvedValue({ token: 'token-123', user: { name: 'Student', role: 'user' } });

    render(<Signin />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'student@test.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => expect(mockSignin).toHaveBeenCalledWith('student@test.com', '123456'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
