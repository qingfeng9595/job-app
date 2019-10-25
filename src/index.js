import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import combineReducers from "./redux/reducer";
import Login from './container/login/login';
import Register from './container/register/register';
import "./config";
// import './index.css';
// import App from './App';

import * as serviceWorker from "./serviceWorker";
import AuthRoute from "./component/authroute/authroute";

const store = createStore(
  combineReducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension() : f => f
  )
);
const Boss = ()=>{
  return <p>this is boss</p>
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthRoute />    
      <Route path="/boss" component={Boss} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
