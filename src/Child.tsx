import React, { useEffect } from 'react'

const Child = ({returnComments}) => {

    useEffect(() =>{
        console.log('THIS FUNCTION WAS CALLED')
    }, [returnComments])
  return (
    <div>
        {returnComments('Temitayo')}
    </div>
  )
}

export default Child