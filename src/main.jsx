import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './mui/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    </BrowserRouter>
)
