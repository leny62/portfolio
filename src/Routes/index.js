import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../views/Home/';
import Contact from '../views/Contact/Contact';
import About from '../views/About';
import Portfolio from '../views/Portfolio/Portfolio';

function index() {
  return (
    <Router>
    <div>
    <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact" component={Portfolio} />
    </Switch>
    </div>
    </Router>
  );
}

export default index;