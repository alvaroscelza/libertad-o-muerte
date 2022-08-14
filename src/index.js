import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from "react-router-dom";

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
