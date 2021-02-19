import React, { useReducer } from "react";
import reducer from "../../reducer";
import { DECREMENT, INCREMENT, RESET } from "../../types";
import Header from "../Shared/Header";

const Counter = () => {

    const initialState = {
      count: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = () =>{
      dispatch({
        type: INCREMENT
      })
    }

    const decrement = () =>{
      dispatch({
        type: DECREMENT
      })
    }

    const reset = () =>{
      dispatch({
        type: RESET,
        payload: state.count = 0
      })
    }

  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex border-gray-300 border-2 w-full xl:w-1/2 lg:w-4/5 bg-gray-200 flex-col mx-5 lg:mx-0 px-5 py-3">
          <div className="w-full flex justify-between items-center mb-5 flex-col md:flex-row">
            <button onClick={increment} className="text-white uppercase bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-xl cursor-pointer w-full md:w-auto">
              Increment + 1
            </button>
            <button onClick={reset} className="text-white uppercase bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-900 rounded text-xl my-5 md:my-0 cursor-pointer w-full md:w-auto">
              Reset
            </button>
            <button onClick={decrement} className="text-white uppercase bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-xl cursor-pointer w-full md:w-auto">
              Decrement - 1
            </button>
          </div>
          <p className="m-auto cursor-default flex justify-center items-center border-2 border-gray-300 bg-black hover:text-black hover:bg-white rounded-full w-20 h-20 focus:outline-none text-white text-4xl">
            {state.count}
          </p>
        </div>
      </div>
    </>
  );
};

export default Counter;
