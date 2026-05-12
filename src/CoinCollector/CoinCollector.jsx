import React, { useReducer } from 'react'

//assign inital state 
const initalState = { coins: 0, level: 0 };

//write function of reducer function 
function CoinReducer(state, action) {
  switch (action.type) {
    case "COLLECT_COIN": {
      const newCoins =  state.coins + 1;
      if(newCoins > 10){
        return { ...state, coins: 0, level: state.level+1  }
      }
      return { ...state, coins:newCoins  }
    }
    case "LOSE_COIN": {
      return { ...state, coins: state.coins - 1, level: state.level  }
    } case "BONUS": {
      return { ...state, coins: state.coins + 5, level: state.level  }
    }
    case "RESET": {
      return { coins: 0, level: 0 }
    }
    case "LEVEL_UP": {
      if (state.coins >= 10) {
        return { ...state, coins: 0, level: state.level + 1 }
      } else {
        return state
      }

    }
  }

}

const CoinCollector = () => {
  //use useReducer 
  const [state, dispatch] = useReducer(CoinReducer, initalState);
  return (
    <div>
      <h1 className='text-center bg-primary text-light p-2'>Collecting Coins</h1>
      <div className="box m-5 mx-auto p-3 rounded">
        <h2>Coins:{state.coins}</h2>
        <h4>Level :{state.level}</h4>
        <div className='mt-3'> 
        //using in button useReducer 
        <button className='btn btn-primary me-2 w-75' onClick={() => dispatch({ type: "COLLECT_COIN" })}>Collect coins</button>
        <br />
        <button className='btn btn-danger m-2 w-75' onClick={() => dispatch({ type: "LOSE_COIN" })}>Lose Coin</button>
        <br />
        <button className='btn btn-warning m-2 w-75' onClick={() => dispatch({ type: "RESET" })}>Reset</button>
       
        {/* <button className='btn btn-success m-2 w-75' onClick={() => dispatch({ type: "LEVEL_UP" })}>Level UP</button> */}
        <br />
         <button className='btn btn-warning m-2 w-75' onClick={() => dispatch({ type: "BONUS" })}>Bonus</button>
        </div>
      </div>
    </div>
  )
}

export default CoinCollector
