import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./Join/Join";
import Chat from "./Chat/Chat";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
