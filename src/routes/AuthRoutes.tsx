import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ForgotPasswordPage, LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="login" element={<LoginPage />} />

      <Route path="register" element={<RegisterPage />} />

      <Route path="forgotPassword" element={<ForgotPasswordPage />} />
    </Routes>
  )
}