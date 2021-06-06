import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/about" component={ AboutScreen } />
                    <Route path="/login" component={ LoginScreen } />
                    <Route path="/about" component={ AboutScreen } />
                </Switch>
            </div>
        </Router>
    )
}
