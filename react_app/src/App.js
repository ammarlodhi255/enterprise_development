import Navbar from './Navbar';
import Home from './Home';
import Welcome from './Welcome';
import SignUp from './SignUp';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventBind from './EventBind';

function App() {
  const title = 'Second Component'
  return (
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Switch>
    //         <Route exact path='/'>
    //           <h1>First React Component</h1>
    //           <h2>{ title }</h2>
    //           <Home />
    //         </Route>
    //         <Route exact path="/about">
    //           <Welcome title={ "" } name={ "Ahmed" }/>
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
    
    <div className="App">
      {/* <SignUp /> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      <EventBind />
    </div>
  );
}

export default App;
