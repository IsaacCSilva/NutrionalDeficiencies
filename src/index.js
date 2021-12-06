import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import Chart from 'chart.js'
 import * as AWS from 'aws-sdk'
 import { ConfigurationOptions } from 'aws-sdk'
 
//  const ConfigurationOptions = {
//      region: 'Global',
//      secretAccessKey: 'IgDhzy5K8REduwFZs37A/mRBUPjuKdJFcGc64BCh',
//      accessKeyId: 'AKIAQVPG2JQHK2CQ27QN'
//  }
 
//  AWS.config.update(configuration)

 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
