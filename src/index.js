import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page.js';
import './styles/CSS/styles.css';

const element = <h1>hello, world</h1>; 
ReactDOM.render(<Page />, document.getElementById('app'));