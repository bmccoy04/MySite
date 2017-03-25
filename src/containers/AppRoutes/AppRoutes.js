import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../App/App';
import Home from '../../components/home/Home';
import Server from '../../components/servers/Servers';
import FourOhhFour from '../../components/fourOhhFour/FourOhhFour';
import VisibleTodoList from '../../components/visibleTodoList/VisibleTodoList';

const routes = (
    <Router history={hashHistory}>
        <Route component={App}>
            <Route path="/" component={Home} />
            <Route path="/servers" component={Server} />
            <Route path="/visibleTodoList" component={VisibleTodoList} />
            <Route path="*" component={FourOhhFour}></Route>
        </Route>
    </Router>
)

export default routes;