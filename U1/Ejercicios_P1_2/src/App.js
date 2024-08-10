
import './App.css';
import Ejercicio1 from './Components/Ejercicio1';
import Ejercicio2 from './Components/Ejercicio2';
import Ejercicio3 from './Components/Ejercicio3';
import Ejercicio4 from './Components/Ejercicio4';

import beers from './Components/Beers';

function App() {
  return (
    <div>
      <header>
        <Ejercicio1></Ejercicio1>
        <Ejercicio2></Ejercicio2>
        <Ejercicio3 props={beers}/>
        <Ejercicio4></Ejercicio4>
      </header>
    </div>
  );
}

export default App;
