import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Events from '../components/events/Events';
import News from '../components/news/News';
import About from '../components/about/About';
const AppRouter = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  };
  
  export default AppRouter;