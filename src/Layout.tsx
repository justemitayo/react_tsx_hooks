import React, {forwardRef, useImperativeHandle, useState} from 'react'


// interface LayoutHandle {
//   alterToggle: () => void
// }

const Layout = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    alterToggle: () => {
      setToggle(!toggle)
    },
  }))
  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  )
})

export default Layout