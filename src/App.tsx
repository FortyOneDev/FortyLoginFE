import './assets/styles/styles.css';
import { Footer } from './components/index';
import { AuthRoutes } from './routes/AuthRoutes';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLanguage = navigator.language;
    const language = browserLanguage.startsWith('es') ? 'es' : 'en';
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <>
      <AuthRoutes /> 
      <Footer />
    </>
  );
}

export default App;
