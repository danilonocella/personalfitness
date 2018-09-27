import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import BioPage from './components/bio/BioPage';
import ContactPage from './components/contact/ContactPage';
import ExercisesPage from './components/exercises/ExercisesPage';
import ResumePage from './components/resume/ResumePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/bio" component={BioPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/exercises" component={ExercisesPage}/>
    <Route path="/resume" component={ResumePage}/>
  </Switch>
)

export default Routes;

/*
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>

  </Route>
);
*/