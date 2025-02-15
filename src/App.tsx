import React from 'react';
import './App.css';
import Reducer from './Reducer.tsx';
import Effect from './Effect.tsx';
import Ref from './Ref.tsx';
import ImperativeHandle from './ImperativeHandle.tsx';
import Context from './Context.tsx';

const App: React.FC =() => {
  return (
    <div className="App">
      <Reducer />
      <Effect />
      <Ref />
      <ImperativeHandle />
      <Context />
    </div>
  );
}

export default App;
