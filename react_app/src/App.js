import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Second Component'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>First React Component</h1>
        <h2>{ title }</h2>
        <Home />
      </div>
    </div>
  );
}

export default App;
