import './App.css';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* users.map((items, index) => <UsersArray array={items}/>) */}
          <Calculator />
        
      </header>
    </div>
  );
}

export default App;
