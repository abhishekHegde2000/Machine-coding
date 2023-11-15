import React, { useState } from 'react'

const FormData = () => {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    const [display, setDisplay] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setDisplay(true)
    }
  return (
    <div className='flex justify-center items-center flex-col'>
            <form 
            onSubmit={handleSubmit}
            className='flex flex-col border'>
                <label>Username</label>
                <input className='border' type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <label>Age</label>
                <input className='border' type="text" value={age} onChange={e => setAge(e.target.value)} />
                <button className='border' type="submit">Submit</button>
            </form>
            {display && (
                <div className='m-4'>
                    <p>Username: {username}</p>
                    <p>Age: {age}</p>
                </div>
            )}

    </div>
  )
}

export default FormData