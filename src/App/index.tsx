import { Button } from "antd";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jokes from "./Jokes";
import AddJoke from "./AddJoke";
import EditJoke from "./EditJoke";
import PlayJokes from "./PlayJokes";

const App = () => (
  <div className="padding-2">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Jokes} exact />
        <Route path="/add" component={AddJoke} exact />
        <Route path="/:id/edit" component={EditJoke} exact />
        <Route path="/:id/play-jokes" component={PlayJokes} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
