import { useState } from "react";

function App() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Increment", count);
  };

  // Function to decrement the count
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    console.log("Decrement", count);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Decrement
          </button>
        </div>
        <div className="text-2xl">Count: {count}</div>
      </div>
    </div>
  );
}

export default App;
