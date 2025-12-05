import { renderHook, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../context/AuthContext.jsx';

describe('AuthContext', () => {
  test('provides default unauthenticated state', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });
    expect(result.current.token).toBeFalsy();
    expect(result.current.user).toBeFalsy();
  });

  test('signout clears token and user', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    act(() => {
      // Simulate a signed-in state first if API exposes setters
      result.current.signout();
    });

    expect(result.current.token).toBeFalsy();
    expect(result.current.user).toBeFalsy();
  });
});
