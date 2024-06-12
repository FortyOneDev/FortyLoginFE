import { Dispatch } from '@reduxjs/toolkit';
import { checkingCredentials, forgotPassword, logout, showErrorMessage, clearErrorMessage } from './authSlice';
import { User } from '../../interfaces/User';
import jwt from 'jsonwebtoken';

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    dispatch(clearErrorMessage());
    try {
      const userData = await fakeAuthentication(email, password);

      if (userData) {
        //const token = generateToken(userData);
        // Redirigir al usuario a App2 con el token en la URL
        //window.location.href = `https://app2.example.com?token=${encodeURIComponent(token)}`;
        window.location.href = 'https://www.youtube.com/watch?v=YP99pqIINtw&t=124s';
      } else {
        dispatch(showErrorMessage('El usuario no existe. Verifique sus credenciales.'));
      }
    } catch (error) {
      alert('Credenciales incorrectas');
      dispatch(showErrorMessage('Error en la autenticación. Por favor, inténtelo de nuevo más tarde.'));
    }
  };
};

const fakeAuthentication = async (email: string, password: string): Promise<User | null> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email === 'nfernandez@fortyone.com.ar' && password === 'password') {
    return {
      userId: 1,
      email: email,
      userName: 'nicof',
      passwordHash: 'hashedpassword',
      picture: 'profile_picture_url',
      deleted: false,
      dateCreate: new Date(),
      projectId: 123,
      accessFailedCount: 0,
      lockoutEnabled: false,
      phoneNumber: '+1234567890',
    };
  } else {
    return null;
  }
};


export const startForgotPassword = (payload: ForgotPasswordPayload) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());

    try {
      const result = await fakeChangePassword(payload);

      if (result.success) {
        dispatch(forgotPassword({
          currentPassword: payload.currentPassword,
          newPassword: payload.newPassword,
          confirmPassword: payload.confirmPassword,
          errorMessage: undefined
        }));
      } else {
        dispatch(forgotPassword({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
          errorMessage: result.errorMessage
        }));
      }
    } catch (error) {
      console.error('Error en el cambio de contraseña:', error);
      dispatch(forgotPassword({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        errorMessage: 'Error en el cambio de contraseña'
      }));
    }
  };
};

const fakeChangePassword = async (payload: ForgotPasswordPayload): Promise<{ success: boolean, errorMessage?: string }> => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (payload.currentPassword === 'password' && payload.newPassword === payload.confirmPassword) {
    return { success: true };
  } else {
    return { success: false, errorMessage: 'Las contraseñas no coinciden o la contraseña actual es incorrecta' };
  }
};

export const startLogout = () => {
  return async (dispatch: Dispatch) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    dispatch(logout({ errorMessage: undefined }));
  };
};

interface ForgotPasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  errorMessage?: string;
}

const generateToken = (userData: User): string => {
  const { userId, email, userName } = userData;

  const secretKey = 'tu_clave_secreta';

  const payload = {
    userId,
    email,
    userName
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // El token expirará en 1 hora
  return token;
};