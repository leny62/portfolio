import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../views/Home/';
import Contact from '../views/Contact/Contact';

function index() {
  return (
    <Router>
    <div>
    <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
    </Switch>
    </div>
    </Router>
  );
}

export default index;