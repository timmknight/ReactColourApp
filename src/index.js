import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './routes';

ReactDOM.render(
  <Router history={hashHistory} routes={Routes} />,
  document.querySelector('.app'));
