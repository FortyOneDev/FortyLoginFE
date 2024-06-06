import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { checkingAuthentication } from '@store/auth/thunks';

interface LoginForm {
  email: string;
  password: string;
}

export const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginForm>({
    email: 'nfernandez@fortyone.com.ar',
    password: '123456'
  });

  const { email, password } = formData;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication( email, password ));
    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {
      replace: true
    });
  };

  return (
    <div className='card'>
      <p className='text-center' id='title'>FortyHelpDesk</p>
      <p className='text-center'>Bienvenido a FortyHelpDesk, una web diseñada para prestar servicios con la posibilidad de gestionar, solucionar y medir las incidencias de manera integral.</p>
      <br/>
      <form className="form-validate" onSubmit={onSubmit}>
        <div className="text-center">
          <input 
            id="Email" 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            data-msg="Por favor ingrese su Email" 
            className="input-material" 
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="text-center">
          <input 
            id="Password" 
            type="password" 
            name="password" 
            placeholder="Contraseña" 
            required 
            data-msg="Por favor ingrese su contraseña" 
            className="input-material" 
            value={password}
            onChange={onInputChange}
          />
          <Link to='forgotPassword'><p>¿Olvidaste tu contraseña?</p></Link>
        </div>
        <div className="text-center mt-0">
          <button type='submit' id='btnLogin' className="btn btn-block btn-success rounded mb-5">Iniciar sesión</button>
        </div>
        <div className="text-center">
          <p className="mb-3">¿No tenés cuenta? Registrate ahora.</p>
          <Link to='register' id='btnRegister' className="btn btn-block btn-outline-success rounded">Registrarme ahora</Link>
        </div>
      </form>
    </div>
  );
};
