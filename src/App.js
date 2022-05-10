import './App.css';
import { Calculator } from './components/Calculator';
// import { UsersArray } from './components/UsersArray';

// const users = [
//   {
//   name: 'Jonathan',
//   age: '25',
//   platform: 'Facebook'
//   },
//   {
//       name: 'Salvatore',
//       age: '21',
//       platform: 'Twitter'
//   },
//   {
//       name: 'Federico',
//       age: '60',
//       platform: 'none'
//   }
//   ];

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
