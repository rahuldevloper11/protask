import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../components/home';
import Piechart from '../components/piechart';
import Userdata from '../components/usersdata';


export default function Mainrouting() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/userdata" component={Userdata} />
                <Route exact path="/piechart" component={Piechart} />
            </Switch>
        </Router>
    )
}