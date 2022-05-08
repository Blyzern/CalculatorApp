import logo from './logo.svg';
import './App.css';
import { UsersArray } from './components/UsersArray';

const users = [
  {
  name: 'Jonathan',
  age: '25',
  platform: 'Facebook'
  },
  {
      name: 'Salvatore',
      age: '21',
      platform: 'Twitter'
  },
  {
      name: 'Federico',
      age: '60',
      platform: 'none'
  }
  ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          users.map((items, index) => <UsersArray array={items}/>)
        }
      </header>
    </div>
  );
}

export default App;
