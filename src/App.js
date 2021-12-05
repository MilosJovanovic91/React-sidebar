import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
