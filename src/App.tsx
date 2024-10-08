import React from 'react';
import Provider from './providers/providers';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
};

export default App;
