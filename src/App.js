import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">MEMORY GAME</header>
      <div className="btnScr">
        <span className ="turn"> a </span>
        <div className="btn">
        <button className="btnIn BtnNG">New Game</button>
        <button className="btnIn BtnRow3"> 3 x 4</button>
        <button className="btnIn BtnRow4"> 4 x 4</button>
        <button className="btnIn BtnRow5"> 5 x 6</button>
        <button className="btnIn BtnRow6"> 5 x 6</button>
        </div>
      </div>
      <div className="table">
        <table>
        </table>
      </div>
    </div>
    
  );
}

export default App;
