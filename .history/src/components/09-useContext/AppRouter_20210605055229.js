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
                <Switch>
                    <Route path="/about" component={ AboutScreen } />
                    <Route path="/login" component={ LoginScreen } />
                    <Route path="/" component={ HomeScreen } />
                </Switch>
            </div>
        </Router>
    )
}
