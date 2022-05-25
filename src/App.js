import './App.css';
import SearchComponent from './components/SearchComponent';
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchComponent />
        <List/>
      </header>
    </div>
  );
}

export default App;
