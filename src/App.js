import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './css/game.css'

function Square({value, onClick, player}){
  return (
    <button className="square" onClick={() => onClick(value)}> {player(value)}
    </button>
  );
}

function Board({onClickMethod, playerFinder, nextPlayer}) {
  return (
    <div>
      <div className="status">{nextPlayer()}</div>
      <div className="board-row">
        <Square value={0} onClick={onClickMethod} player={playerFinder}/>
        <Square value={1} onClick={onClickMethod} player={playerFinder}/>
        <Square value={2} onClick={onClickMethod} player={playerFinder}/>
      </div>
      <div className="board-row">
        <Square value={3} onClick={onClickMethod} player={playerFinder}/>
        <Square value={4} onClick={onClickMethod} player={playerFinder}/>
        <Square value={5} onClick={onClickMethod} player={playerFinder}/>
      </div>
      <div className="board-row">
        <Square value={6} onClick={onClickMethod} player={playerFinder}/>
        <Square value={7} onClick={onClickMethod} player={playerFinder}/>
        <Square value={8} onClick={onClickMethod} player={playerFinder}/>
      </div>
    </div>
  );
} 

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

export default function Game(){
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function onClickMethod(args){
    const squares1 = squares.slice();
    if (squares1[args]){
      alert('already set');
    }if(calculateWinner(squares1)){
      alert('Game Over');
    }else{  
    squares1[args] = xIsNext?'X':'O';
    if (calculateWinner(squares1)){
      setSquares(squares1);
      alert('Winner: ' + calculateWinner(squares1));
    }    
     setXIsNext(!xIsNext);
     setSquares(squares1);
    }
  }

  function playerFinder(value) {
    console.log(value);
    if (squares[value]){
      return squares[value];
    }
    return '';
  }
  
  function nextPlayer(){
    return 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (<Board onClickMethod={onClickMethod} playerFinder={playerFinder} nextPlayer={nextPlayer}/>);
}