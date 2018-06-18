import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/index';
import Scoreboard from './Scoreboard/index';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/roster" component={Home} />
        <Route path="/scoreboard" component={Scoreboard} />
      </Switch>
    );
  }
}

export default Main;
