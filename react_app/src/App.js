import Navbar from './Navbar';

function App() {
  const title = 'Second Component'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>First React Component</h1>
        <h2>{ title }</h2>
      </div>
    </div>
  );
}

export default App;
