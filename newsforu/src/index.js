import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddBlog from './admin-user-components/AddBlog'
import Header from './header/Header';
import Footer from './footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AddBlog/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
