import './App.css';
import Average from './components/Average';
import Interval from './components/Interval';
import Random from './components/Random';
import Sum from './components/Sum';
function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Interval></Interval>
      </div>

      <div className="linha">
        <Average/>
        <Sum />
        <Random />
      </div>
    </div>
  );
}

export default App;
