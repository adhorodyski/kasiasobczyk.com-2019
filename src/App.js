import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Solo from './components/Solo/Solo';
import Education from './components/Education/Education';
import Ceremonies from './components/Ceremonies/Ceremonies';

class App extends Component {
  render() {
    const Routes = () => (
      <Switch>
        <Route exact path="/koncerty-solowe" render={() => <Solo />} />
        <Route exact path="/koncerty-edukacyjne" render={() => <Education />} />
        <Route exact path="/oprawa-ceremonii" render={() => <Ceremonies />} />
      </Switch>
    );
    return (
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
