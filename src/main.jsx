import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Root from './home/Root';
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <Root></Root>
  </React.StrictMode>
);
