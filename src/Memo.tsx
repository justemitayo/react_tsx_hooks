import React,{useState, useEffect, useMemo} from 'react';
import axios from 'axios';

export default function Memo () {
    const [data, setData] = useState<null | any[] >(null);
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/comments')
          .then((response) => {
            setData(response.data)
          })
      }, [])

      const findLongestName = (comments: any[]) =>{
        if (!comments || comments.length === 0) return null; 
        let longestName = '';
        for (let i=0; i< comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName
            }
        }
        console.log('THIS WAS COMPUTED')
        return longestName;
    }
    
    const getLongestName = useMemo(() => data ? findLongestName(data) : 'loading...', [data])

  return (
    <div>
        <hr />
        {getLongestName} <br />

        <button onClick={() => setToggle(!toggle)}>Toggle</button>

        {toggle && <h1>toggle</h1>}
        <hr />
    </div>
  )
}
