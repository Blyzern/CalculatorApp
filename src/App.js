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
const numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 0, '.'];
const operators = ['+', '-', '*', '/','DEL'];
const result = 0;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          // users.map((items, index) => <UsersArray array={items}/>)
          <div className='calculatorContainer'>
            <div className='calculatorDisplay'>
            <span>(0)</span>{result || '0'}
              </div>
            {operators.map((items, index) => <Calculator text={items}/>)}
            {numbers.map((items, index) => <Calculator text={items} />)}
          </div>
        }
      </header>
    </div>
  );
}

export default App;
