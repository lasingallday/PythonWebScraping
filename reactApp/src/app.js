import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/MainApp';
import './styles/styles.scss';

var appRoot = document.getElementById('app');
ReactDOM.render(<MainApp />, appRoot);