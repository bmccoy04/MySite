import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './containers/App';
import Home from './components/home/Home';
import Server from './components/servers/Servers';
import FourOhhFour from './components/fourOhhFour/FourOhhFour';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/servers" component={Server} />
            <Route path="*" component={FourOhhFour}></Route>
        </Route>
    </Router>,
  document.getElementById('root')
);
