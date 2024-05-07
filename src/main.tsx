import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import {RouteManager} from './route-manager';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouteManager />
    </React.StrictMode>,
);
