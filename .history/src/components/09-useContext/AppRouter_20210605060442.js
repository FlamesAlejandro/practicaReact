import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/" component={ HomeScreen } />
                </Switch>
            </div>
        </Router>
    )
}
