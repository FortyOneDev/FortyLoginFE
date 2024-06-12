import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../interfaces/User';

interface AuthState {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  user: User | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'not-authenticated',
  user: null,
  errorMessage: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.user = action.payload;
      state.errorMessage = null;
    },
    logout: (state, action: PayloadAction<{ errorMessage?: string }>) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = action.payload?.errorMessage || null;
    },
    forgotPassword: (state, action: PayloadAction<{ currentPassword: string, newPassword: string, confirmPassword: string, errorMessage?: string }>) => {
      state.user = null;
      state.errorMessage = action.payload.errorMessage || null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
    showErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    }
  }
});

export const { login, logout, forgotPassword, checkingCredentials, showErrorMessage, clearErrorMessage } = authSlice.actions;

export default authSlice.reducer;
