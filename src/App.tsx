import React from 'react';
import './App.css';
import { Footer } from './components/index';
import { AuthRoutes } from 'routes/AuthRoutes';

function App() {
  return (
    <>
      <AuthRoutes />
      <Footer />
    </>
  );
}

export default App;
