import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import Hello from './Hello';
=======
import App from './containers/App';
>>>>>>> 40eb5293e8bf1f2304e74a6081cd455e8ff6a197
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    {/* <h1> Hello World </h1> */}
    <Hello greeting={'Hello' + ' ' + 'React Ninja'}/>
  </React.StrictMode>
=======
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
>>>>>>> 40eb5293e8bf1f2304e74a6081cd455e8ff6a197
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
