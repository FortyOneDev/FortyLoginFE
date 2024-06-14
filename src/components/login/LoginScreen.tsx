import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { checkingAuthentication } from '../../store/auth';
import { AppDispatch } from '../../store';
import './Login.scss';

interface LoginForm {
  email: string;
  password: string;
}

export const LoginScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication(email, password));
    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {
      replace: true
    });
  };

  return (
    <div>
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              data-msg="Por favor ingrese su Email"
              className="input-material"
              value={email}
              onChange={onInputChange}
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={onInputChange}
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Recuérdame</label>
            <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>No tienes cuenta? <Link to="/register">Regístrate</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};
