import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Effect:React.FC = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email)
      })
  }, [])
  return (
    <div>
      <hr />
      Hello Word 
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
    </div>
  )
}

export default Effect