import React, {useRef} from 'react'
import Layout from './Layout.tsx'

const ImperativeHandle:React.FC = () => {
    const buttonRef = useRef<{ alterToggle: () => void }>(null)
    // const buttonRef = useRef(null)
  return (
    <div>
        <button onClick={() => {
            buttonRef.current?.alterToggle()
        }}>Button From Parent</button>
        <Layout ref={buttonRef}/> 

        <hr />
    </div>
  )
}

export default ImperativeHandle