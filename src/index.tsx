import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from 'shared/providers/AuthProvider'
import { SideBarProvider } from './shared/providers/SIdeBarProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

import './app/style/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <SideBarProvider>
        <App/>
      </SideBarProvider>
    </AuthProvider>
  </BrowserRouter>
);

