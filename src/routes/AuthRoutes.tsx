import { Routes, Route } from 'react-router-dom';
import { ForgotPasswordPage, LoginPage, RegisterPage } from '../pages';

export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forgotPassword" element={<ForgotPasswordPage />} />
    </Routes>
  );
}
