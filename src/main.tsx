import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import App from './App'
import { store } from './store'

import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
)
