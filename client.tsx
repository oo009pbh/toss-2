import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

// routes
import { MainPageRoutes } from './router';

// styles
import { Global } from '@emotion/react';
import { globalStyles } from '@styles/globalStyle';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://13.209.22.23' : 'http://localhost:3090';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Global styles={globalStyles} />
    <MainPageRoutes />
  </BrowserRouter>,
);
