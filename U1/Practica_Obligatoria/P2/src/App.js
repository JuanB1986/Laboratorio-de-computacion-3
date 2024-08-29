import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';

const netIncomes = [
  {brand: 'McDonalds', income: 1291283}, 
  {brand: 'Burger King', income: 1927361}, 
  {brand: 'KFC', income: 1098463}
];

function App() {
  return (
    <div>
      <Table arrayTable={netIncomes}></Table>
    </div>
  );
}

export default App;
