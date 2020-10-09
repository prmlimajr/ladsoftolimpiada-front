import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Scoreboard from '../pages/Scoreboard';
import MyScoreCard from '../pages/MyScoreCard';
import Help from '../pages/Help';

import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/register' component={SignUp} />

        <Route path='/dashboard' component={Dashboard} isPrivate />
        <Route path='/profile' component={Profile} isPrivate />
        <Route path='/ranking' component={Scoreboard} isPrivate />
        <Route path='/my-answers' component={MyScoreCard} isPrivate />
        <Route path='/help' component={Help} isPrivate />

        <Route path='/' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
