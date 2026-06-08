import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/app.css';
import { HelmetProvider as SEOProvider } from 'react-helmet-async';
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SEOProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </SEOProvider>
    </React.StrictMode>,
)