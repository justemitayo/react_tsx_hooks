import React, {useContext} from 'react'
import {AppContext} from './Context.tsx'

const Login = () => {

    const context = useContext(AppContext);
    if (!context) {
        // Handle the case where context is null, maybe show an error or return null
        return <div>Context is not available</div>;
      }

      const {setUsername} = context 
  return (
    <div>
        <input type='text' onChange={(e) => {
            e.preventDefault();
            setUsername(e.target.value)
        }}/>
    </div>
  )
}

export default Login