import React from 'react';
import { useReducer } from 'react';

const change = (state, action) => {
    switch (action.type) {
        case "increment" :
            return{count: state.count + 1, showText: state.showText}
        case "toggleShowText":
            return{count: state.count, showText:!state.showText}
        default:
            return state;
    }
}

const Reducer:React.FC = () => {

    const [state, dispatch] = useReducer(change, {count:0, showText:true}) 
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() =>{
            dispatch({type: "increment"});
            dispatch({type: "toggleShowText"})
        }}>Click Here</button>
        { state.showText && <p>This is a Text</p>}
    </div>
  )
}

export default Reducer