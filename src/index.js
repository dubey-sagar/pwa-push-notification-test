import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeFirebase } from './push-notification';
ReactDOM.render(<App />, document.getElementById('root'));
initializeFirebase();