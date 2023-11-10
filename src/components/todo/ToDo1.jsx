import React, { useState } from 'react'

const ToDo1 = () => {
    // const [inputValue, setInputValue] = useState('');
    // const [items, setItems] = useState([]);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setItems([...items, inputValue]);
    //     setInputValue('');
    // }
    // const handleDelete = (indexToDelete) => {
    //     if (window.confirm('Are you sure you want to delete this item?')) {
    //       setItems(items.filter((item, index) => index !== indexToDelete));
    //     }
    //   }
    // return (
    //     <div>

    //     <div className='flex justify-center'>
    //         <form className='justify-center' onSubmit={handleSubmit}>
    //             <input 
    //                 className='border-2 border-black shadow-lg m-2 p-2 ' 
    //                 type="text" 
    //                 placeholder='Enter text' 
    //                 value={inputValue}
    //                 onChange={(e) => setInputValue(e.target.value)}
    //             />
    //             <button className='p-2 m-2 bg-blue-300 hover:bg-blue-400 active:bg-blue-500 border-1 border-black cursor-pointer' type='submit'>Add</button>
    //         </form>
    //     </div>
    //     <div className='justify-center'>
    //             {items.map((item, index) => (
    //                 <div key={index} className='flex justify-center items-center'>
    //                     <h1>{item}</h1>
    //                     <button onClick={() => handleDelete(index)} className='p-2 m-2 bg-red-300 hover:bg-red-400 active:bg-red-500 border-1 border-black cursor-pointer'>Delete</button>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, inputValue]);
    setInputValue('');
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete the selected items?')) {
      setItems(items.filter((_, index) => !selectedItems.includes(index)));
      setSelectedItems([]);
    }
  }

  const handleCheckboxChange = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  }

  return (
    <div className='flex justify-center'>
      <form className='justify-center' onSubmit={handleSubmit}>
        <input 
          className='border-2 border-black shadow-lg m-2 p-2 ' 
          type="text" 
          placeholder='Enter text' 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='p-2 m-2 bg-blue-300 hover:bg-blue-400 active:bg-blue-500 border-1 border-black cursor-pointer' type='submit'>Add</button>
      </form>
      <div>
        {items.map((item, index) => (
          <div key={index} className='flex justify-between items-center'>
            <input type='checkbox' onChange={() => handleCheckboxChange(index)} checked={selectedItems.includes(index)} />
            <h1>{item}</h1>
            <button onClick={handleDelete} className='p-2 m-2 bg-red-300 hover:bg-red-400 active:bg-red-500 border-1 border-black cursor-pointer'>Delete Selected</button>
          </div>
        ))}
      </div>
    </div>
  )

}

export default ToDo1