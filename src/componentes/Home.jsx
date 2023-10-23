import React, { useState } from 'react'
import Squir from './Squir'
const Home = () => {
  const [state, setState] = useState(Array(9).fill(null))
  const [isXTurn, setXTurn] = useState(true);
  console.log(state);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a]
      }
    }
    return false
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    // console.log('clicked',index);
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setXTurn(!isXTurn)

  }

  const handleReset = () => {
    setState(Array(9).fill(null))
  }
  return (

    <div className='bord_container'>
      {
        isWinner ? (
          <h2 className='flex'><h1 style={{ color: "#fff", textAlign: "center", fontSize: "35px" }}>{isWinner} : Won The Game </h1><button className='btn' onClick={handleReset}>Play Again</button></h2>
        ) : (
          <>
            <h2 className='player'> Player <span className='span'>{isXTurn ? "x" : "0"}</span> plase move <a href="/">Refresh</a></h2>
            <div className='bord_row'>
              <Squir onClick={() => handleClick(0)} value={state[0]} />
              <Squir onClick={() => handleClick(1)} value={state[1]} />
              <Squir onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className='bord_row'>
              <Squir onClick={() => handleClick(3)} value={state[3]} />
              <Squir onClick={() => handleClick(4)} value={state[4]} />
              <Squir onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className='bord_row'>
              <Squir onClick={() => handleClick(6)} value={state[6]} />
              <Squir onClick={() => handleClick(7)} value={state[7]} />
              <Squir onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
    </div>
  )
}

export default Home
