import React from 'react';
import './App.css';
import RandomThunder from './RandomThunder';
import HelpPage from './HelpPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RandomThunder} />
          <Route exact path="/RandomThunder" component={RandomThunder} />
          <Route path="/HelpPage" component={HelpPage} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
