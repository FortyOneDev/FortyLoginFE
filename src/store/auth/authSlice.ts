import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  uId: string | null;
  email: string | null;
  userName: string | null;
  currentPassword: string | null;
  newPassword: string | null;
  confirmPassword: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'not-authenticated',
  uId: null,
  email: null,
  userName: null,
  currentPassword: null,
  newPassword: null,
  confirmPassword: null,
  errorMessage: null
};

interface LoginPayload {
  uId: string;
  email: string;
  userName: string;
}

interface ForgotPasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  errorMessage?: string;
}

interface LogoutPayload {
  errorMessage?: string;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.status = 'authenticated';
      state.uId = action.payload.uId;
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.errorMessage = null;
    },
    logout: (state, action: PayloadAction<LogoutPayload>) => {
      state.status = 'not-authenticated';
      state.uId = null;
      state.email = null;
      state.userName = null;
      state.currentPassword = null;
      state.newPassword = null;
      state.confirmPassword = null;
      state.errorMessage = action.payload?.errorMessage || null;
    },
    forgotPassword: (state, action: PayloadAction<ForgotPasswordPayload>) => {
      state.currentPassword = action.payload.currentPassword;
      state.newPassword = action.payload.newPassword;
      state.confirmPassword = action.payload.confirmPassword;
      state.errorMessage = action.payload.errorMessage || null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, forgotPassword, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
