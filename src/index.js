import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { MainApp } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainApp />
);
