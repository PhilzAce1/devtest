import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './containers/Home/Home';
import Newgig from './containers/NewGig/Newgig';
import Form from './containers/Form/Form';
import Header from './containers/Header/Header';
function App() {
  return (
    <main>
      <Nav />
      <section>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/newgig" component={Newgig} />
          <Route path="/form" component={Form} />
        </Switch>
      </section>
    </main>
  );
}
export default App;
