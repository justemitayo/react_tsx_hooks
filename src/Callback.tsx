import React, {useCallback, useState} from 'react';
import Child from './Child.tsx';

export default function Callback () {
    const [toggle, setToggle] = useState<boolean>(false);
    const [data, setData] = useState<string>('Yo!, pls sub to this channel.');

    const returnComments = useCallback((name) =>{
        return data + name;
    }, [data])
  return (
    <div>
        <Child  returnComments={returnComments}/>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h1>toggle</h1>}
    </div>
  )
}



