import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AsyncLoginPage = React.lazy(() => import('../pages/LoginPage').then(module => ({ default: module.LoginPage })));
const AsyncRegisterPage = React.lazy(() => import('../pages/RegisterPage').then(module => ({ default: module.RegisterPage })));
const AsyncForgotPasswordPage = React.lazy(() => import('../pages/ForgotPasswordPage').then(module => ({ default: module.ForgotPasswordPage })));

export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AsyncLoginPage />} />
      <Route path="login" element={<AsyncLoginPage />} />
      <Route path="register" element={<AsyncRegisterPage />} />
      <Route path="forgotPassword" element={<AsyncForgotPasswordPage />} />
    </Routes>
  );
}
