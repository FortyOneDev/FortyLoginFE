import { Dispatch } from '@reduxjs/toolkit';
import { checkingCredentials, login } from './authSlice';

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    // Disparar la acción para indicar que se están verificando las credenciales
    dispatch(checkingCredentials());
    
    try {
      // Simular una solicitud de autenticación (reemplaza esto con tu lógica real)
      const userData = await fakeAuthentication(email, password);

      // Simular una autenticación exitosa (reemplaza esto con tu lógica real)
      if (userData) {
        // Disparar la acción de inicio de sesión con los datos del usuario
        dispatch(login({
          uId: userData.uId,
          email: userData.email,
          userName: userData.userName
        }));

        // Opcionalmente, puedes redirigir a otra página después del inicio de sesión
        // navigate('/dashboard');
      } else {
        // Manejar el caso de autenticación fallida
      }
    } catch (error) {
      // Manejar errores de autenticación si es necesario
      console.error('Error en la autenticación:', error);
    }
  };
};

// Función de simulación de autenticación (reemplaza esto con tu lógica real)
const fakeAuthentication = async (email: string, password: string) => {
  // Simulación de una espera para mostrar el proceso de autenticación
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulación de una autenticación exitosa (reemplaza esto con tu lógica real)
  if (email === 'nfernandez@fortyone.com.ar' && password === 'password') {
    return { uId: '1', email: email, userName: 'nicof' };
  } else {
    return null;
  }
};
