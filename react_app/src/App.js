import Navbar from './Navbar';
import Home from './Home';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = 'Second Component'
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <h1>First React Component</h1>
              <h2>{ title }</h2>
              <Home />
            </Route>
            <Route exact path="/about">
              <Welcome title={ "" } name={ "Ahmed" }/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
