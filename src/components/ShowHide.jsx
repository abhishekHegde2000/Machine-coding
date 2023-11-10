import React, { useState } from 'react'

const ShowHide = () => {

    const [show, setShow] = useState(false)
    const [showText , setShowText] = useState(false)
  return (
    <div>
        <div className='m-2'>
            <button
            onClick={() => setShow(!show)}
            className='bg-red-700'>
                {show ? <h1>Hide</h1> : <h1>Show</h1>}
            </button>
        </div>
        <div className='flex m-2'>
            <button
            onClick={() => setShowText(!showText)}
            className='bg-red-700'>
                {showText ? <h1>Hide Text</h1> : <h1>Show Text</h1>}
            </button>
            {/* i want to render a h1 if show text is true else not */}
            {showText && <h1 className='bg-black text-white font-bold'>text showed here</h1>}
        </div>

    </div>
  )
}

export default ShowHide