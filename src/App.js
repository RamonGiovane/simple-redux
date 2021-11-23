import { useState } from 'react';
import './App.css';
import Average from './components/Average';
import Card from './components/Card';
import Interval from './components/Interval';
import Random from './components/Random';
import Sum from './components/Sum';
function App() {

  const [min, setMin] = useState(100)
  const [max, setMax] = useState(2000)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Interval min={min} max={max} 
          onMinChange={setMin} 
          onMaxChange={setMax}>
        </Interval>
      </div>

      <div className="linha">
        <Average min={min} max={max}/>
        <Sum min={min} max={max}/>
        <Random min={min} max={max}/>
      </div>
      
    </div>
  );
}

export default App;
