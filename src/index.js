import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.scss';
import App from './components/Pages/App/App';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';
import NotFound404 from './components/Pages/Error/NotFound404';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route component={NotFound404} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
