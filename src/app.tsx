import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './components/greeting';
import './style/index.scss';

declare let module: any


ReactDOM.render(
    <Greeting message = "Starter: React, Typescript, Sass, Webpack, HMR, Jest, React-Testing-Library" />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
 }