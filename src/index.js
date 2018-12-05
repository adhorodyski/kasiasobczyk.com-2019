import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/index.css';
import './scss/stylesheet.css';
import './scss/bootstrap.min.css';

import App from './App';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
