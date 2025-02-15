import React, { useState } from 'react'
import { useRef } from 'react'

const Ref:React.FC = () => {
    const [name, setName] = useState<string>('Pedro')
    const inputRef = useRef<HTMLInputElement>(null)
    const handleName = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    const RemoveName = () => {
        if(inputRef.current){
            inputRef.current.value = ''
        }
    }
    const NewName = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        setName(newValue);
    }
  return (
    <div>
        <h1>{name}</h1>
        <input type='text' placeholder='Ex...' ref={inputRef} onChange={NewName} /> 
        <button onClick={handleName}>Change Name</button> 
        <button onClick={RemoveName}>Remove name</button>
        <hr/>
    </div>
  )
}

export default Ref