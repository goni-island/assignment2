import './App.css';
import { useState } from 'react';
// import back from './img/back.png';
// import {getImage} from './d.js'; why not ... 

function Box({value, onCardClick}){ 
  
    let imgList = [
    {src: './img/1.png', id :1, alt :"card"},
    {src: './img/2.png', id :2, alt :"card"},
    {src: './img/3.png', id :3, alt :"card"},
    {src: './img/4.png', id :4, alt :"card"},
    {src: './img/5.png', id :5, alt :"card"},
    {src: './img/6.png', id :6, alt :"card"},
    {src: './img/1.png', id :1, alt :"card"},
    {src: './img/2.png', id :2, alt :"card"},
    {src: './img/3.png', id :3, alt :"card"},
    {src: './img/4.png', id :4, alt :"card"},
    {src: './img/5.png', id :5, alt :"card"},
    {src: './img/6.png', id :6, alt :"card"},
    // {src: './img/7.png', id :7, alt :"card"},
    // {src: './img/8.png', id :8, alt :"card"},
    // {src: './img/9.png', id :9, alt :"card"},
    // {src: './img/10.png', id :10, alt :"card"},
    // {src: './img/11.png', id :11, alt :"card"},
    // {src: './img/12.png', id :12, alt :"card"}
  ]

  // {
  //  imgList.map((index) =>{ 
  //   if (index.id == 0) 
  //   <img id = {index.id} src ={index.src} alt="card"/>})
  // }

  const[selected,setSelected]= useState(false);
  const[count,setCount] = useState(0);
  
  if(selected){
    return (
    <button className="col" onClick={(onCardClick) => {setSelected(true);}} ><img src='img/1.png' className = "front card" alt="1" />{value}
    </button>);
  }

 return( <button className="col" onClick={(onCardClick) => {setSelected(true);} } ><img src='img/back.png' className = "back card" alt="1" />{value}
</button>
  );

}
function App( ) {
 


//to suffle 
function cardShuffle(){}
function thirtyGrid(){}
function SisteenGrid(){}
function twelveGrid(){}

  const [IsNext, setIsNext] = useState(true);
  const [boxes, setBoxes] = useState(Array(12).fill(null));
    // creates an array with 12 Elemetns, and set each to null

  function handleClick(i){ // creates a copy of the  arr (nextCards) with slice() arr method
    
    const cardList =[boxes.slice()];
    console.log('clicked!'); 
    
   
    if(boxes[i] || boxes[i]===boxes[i-1]){ // to not to flip anymore ->Card game will take it. 
      return;
    }
    else 
      return ;
  
    const nextCards = boxes.slice(); //updates nextCards arr to add X to the first index of boxes
    if (IsNext) {
      nextCards[i]= false; // if is fliped-> true 
    } 
    else{
      nextCards[i]=false; // if not -> flase 
       
    }
     // calling the setBoxes for react konw the state of the component has changed
    setBoxes(nextCards);
    setIsNext(!IsNext); 
    }

   
  const [Image,reSet] = useState([]);
  const [count,turn] = useState(0);


  // let imgList = [
  //   {src: './img/1.png', id :1, alt :"card"},
  //   {src: './img/2.png', id :2, alt :"card"},
  //   {src: './img/3.png', id :3, alt :"card"},
  //   {src: './img/4.png', id :4, alt :"card"},
  //   {src: './img/5.png', id :5, alt :"card"},
  //   {src: './img/6.png', id :6, alt :"card"},
  //   {src: './img/1.png', id :1, alt :"card"},
  //   {src: './img/2.png', id :2, alt :"card"},
  //   {src: './img/3.png', id :3, alt :"card"},
  //   {src: './img/4.png', id :4, alt :"card"},
  //   {src: './img/5.png', id :5, alt :"card"},
  //   {src: './img/6.png', id :6, alt :"card"},
  //   // {src: './img/7.png', id :7, alt :"card"},
  //   // {src: './img/8.png', id :8, alt :"card"},
  //   // {src: './img/9.png', id :9, alt :"card"},
  //   // {src: './img/10.png', id :10, alt :"card"},
  //   // {src: './img/11.png', id :11, alt :"card"},
  //   // {src: './img/12.png', id :12, alt :"card"}
  // ]

  

  return (
   
    <div className="App">
      {/* {
   imgList.map((index) => 
   <img id = {index.id} src ={index.src} alt="card"/>) 
  }
   */}
      <header className="App-header">MEMORY GAME</header>
      <div className="btnScr">
        <span className ="turn" > Turn :  {count}  </span>
        <div className="btn">
        <button className="btnIn BtnNG" onCardClick={() => cardShuffle()}>New Game</button>
        <button className="btnIn BtnRow3" onCardClick={() => twelveGrid()}> 3 x 4</button>
        <button className="btnIn BtnRow4" onCardClick={() => SisteenGrid()}> 4 x 4</button>
        <button className="btnIn BtnRow6" onCardClick={() => thirtyGrid()}> 5 x 6</button>
        </div>
      </div>
     
      <div className="gridScreen">
        <div className = "row">
          <Box  value={boxes[0]} id ="b1" onClick={() => handleClick(0)} />   
          <Box  value={boxes[1]} id ="b2" onCardClick={() => handleClick(1)}/>
          <Box value={boxes[2]} id ="b3" onCardClick={() => handleClick(2)}/>
          <Box  value={boxes[3]} id ="b4" onCardClick={() => handleClick(3)}/> 
        </div>
        <div className = "row">
          <Box value={boxes[4]}  onCardClick={() => handleClick(4)}/>
          <Box value={boxes[5]}  onCardClick={() => handleClick(5)}/>
          <Box value={boxes[6]} onCardClick={() => handleClick(6)}/>
          <Box value={boxes[7]} onCardClick={() => handleClick(7)}/>
        </div>
        <div className = "row">
          <Box value={boxes[8]} onCardClick={() => handleClick(8)}/>
          <Box value={boxes[9]} onCardClick={() => handleClick(9)}/>
          <Box value={boxes[10]} onCardClick={() => handleClick(10)}/>
          <Box value={boxes[11]} onCardClick={() => handleClick(11)}/>
        </div>
      </div>
    </div>
  );


}
export default App;


