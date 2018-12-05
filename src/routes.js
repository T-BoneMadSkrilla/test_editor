import React from "react";
import { Switch, Route } from "react-router-dom";
import Lesson from "./components/lesson_test/Lesson/Lesson";
import lp1 from "./components/lesson_test/lp1";
import Overview from "./components/lesson_test/Overview";
import lp2 from "./components/lesson_test/lp2";
import lp3 from "./components/lesson_test/lp3";

export default (
  <Switch>
    <Route path="/" exact component={Overview} />
    <Route path="/lesson" component={Lesson} />
    <Route path="/horizontal" component={lp1} />
    <Route path="/wide" component={lp2} />
    <Route path="/tetris" component={lp3} />
  </Switch>
);
