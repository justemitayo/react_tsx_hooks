import React, {useContext} from 'react'
import {AppContext} from './Context.tsx'


const User = () => {

    const context = useContext(AppContext)

    if (!context) {
        // Handle the case where context is null, maybe show an error or return null
        return <div>Context is not available</div>;
      }
  return (
    <div>
        <h1>User: {context.username}</h1>
    </div>
  )
}

export default User