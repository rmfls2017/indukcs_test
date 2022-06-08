import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchComponent from './components/SearchComponent';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
      {/* <header className="App-header"></header> */}
      <SearchComponent />
    </div>
  );
}

export default App;
