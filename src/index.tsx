import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const AsyncFooter = React.lazy(() => import('./components').then(module => ({ default: module.Footer })));
const AsyncAuthRoutes = React.lazy(() => import('./routes/AuthRoutes').then(module => ({ default: module.AuthRoutes })));

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AsyncAuthRoutes />
      <AsyncFooter />
    </Suspense>
  );
}

export default App;
