import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Image from './components/Image';
import ItemDetailComponent from "./components/ItemDetailComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemDetailComponent/>
      </header>
    </div>
  );
}

export default App;
