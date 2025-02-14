import React from 'react';
import './App.css';
import Reducer from './Reducer.tsx';
import Effect from './Effect.tsx';

const App =() => {
  return (
    <div className="App">
      <Reducer />
      <Effect />
    </div>
  );
}

export default App;
