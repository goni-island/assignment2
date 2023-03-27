import './App.css';
import { useState } from 'react';
// import logo from './img/1.png';

// import Image from './img/index1.js';
import Image from './img.json';
let url = 'img/1.png';

function App() {
 

  const flip=(location)=>{
    console.log(location);
  }

  function box({value}){ // tictactoe feature 
    return <button className="col">{value}</button>;
  }

  // const [Image,reSet] = useState([]);
  // const [count,turn] = useState(0);

  return (

    <div className="App">
    {/* let [a] = useState(['1.png','2.png']); */}
      {/* const [Image,reSet] = useState([]);
      const [count,turn] = useState(0);
      const [grid,reSet] = useState([]);
   */}
      {/* function ReSet() {
        
      }
       function setGrid() {
  
      }
      
      function setSix() {
  
      }
      function setThrity() {
  
      } */}


      {/* 1. NewGame -> random배치 
            -> cardup 보여줌
            -> carddown 
        2. 클릭 -> flipped , clicked card marked
                         - > 2 cards flipped ? y : same 2card?  clicked card added to list  
                                                        -> complete checking.. 
                                !same 2card?  : fliped to carddown
                            n : wait and fliped down

      */}

      <header className="App-header">MEMORY GAME</header>
      <div className="btnScr">
        <span className ="turn" > Turn :  {count} </span>
        <div className="btn">
        <button className="btnIn BtnNG" onClickc="reSet()">New Game</button>
        <button className="btnIn BtnRow3" onClick="setGrid()"> 3 x 4</button>
        <button className="btnIn BtnRow4" onClick="setSix()"> 4 x 4</button>
        {/* <button className="btnIn BtnRow5" onClick="setthrity()"> 5 x 6</button> */}
        <button className="btnIn BtnRow6" onClick="setThrity()"> 5 x 6</button>
        </div>
      </div>

      <div className="gridScreen">
        <div className = "row">
          <div className="col" onClick = "Flip(0)">1</div>
          <div className="col" onClick = "Flip(0)">2</div>
          <div className="col" onClick = "Flip(0)">3</div>
          <div className="col" onClick = "Flip(0)">4</div>
        </div>
        <div className = "row">
          <div className="col" onClick = "Flip(0)">5</div>
          <div className="col" onClick = "Flip(0)">6</div>
          <div className="col" onClick = "Flip(0)">7</div>
          <div className="col" onClick = "Flip(0)">8</div>
        </div>
        <div className = "row">
          <div className="col" onClick = "Flip(0)">9</div>
          <div className="col" onClick = "Flip(0)">10</div>
          <div className="col" onClick = "Flip(0)">11</div>
          <div className="col" onClick = "Flip(0)">12</div>
        </div>
      {/* <img  src={logo} className = "logo" alt="test" /> */}
      {/* <img  src={require('./img/1.png')} className = "logo" alt="test" /> */}
      {/* <img  src={require('./img/1.png').default } className = "logo" alt="test" /> not working with locally */}


      {/* public */}
      {/* <img  src=' img/1.png' className = "logo" alt="test" />
      {/* <img  src={a} className = "logo" alt="test" /> */}

           {/* <img  src={url}  className = "logo" alt="test" /> */}
            
{/*            
            <img  src={Image.img1}  className = "logo" alt="test" />
            <img  src={Image.img2}  className = "logo" alt="test" />
            <img  src={Image.img3}  className = "logo" alt="test" />
            <img  src={Image.home.img4}  className = "logo" alt="test" />
            <img  src={Image.home.img5}  className = "logo" alt="test" /> */}

{/* using mapp function and add jason to call img  */}
       

        {/* <table id = "grid">
        </table> */}
      </div>
      {   Image && Image.map((item) => 
          <div className = "grid" key={item.id}>
            <img  src={item.image}  className = "card" alt="faceup"/>
          </div>)
      }
    </div>
  );
}

export default App;



