import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from 'shared/providers/AuthProvider'
import { SideBarProvider } from 'shared/providers/SIdeBarProvider';
import { setupStore } from 'shared/store';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

import './app/style/index.scss';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <SideBarProvider>
          <App/>
        </SideBarProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);

