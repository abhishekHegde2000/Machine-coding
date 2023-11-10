import React from 'react'

const TodDo = () => {

    

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <form className="mb-4">
                <h2 className="mb-2">
                    <label htmlFor="new-todo-input" className="text-lg font-semibold">
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="border p-2 rounded mb-2 w-full"
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add
                </button>
            </form>
            <div className="flex space-x-2 mb-4">
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    <span className="sr-only">Show </span>
                    <span>all</span>
                    <span className="sr-only"> tasks</span>
                </button>
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    <span className="sr-only">Show </span>
                    <span>Active</span>
                    <span className="sr-only"> tasks</span>
                </button>
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    <span className="sr-only">Show </span>
                    <span>Completed</span>
                    <span className="sr-only"> tasks</span>
                </button>
            </div>
            <h2 id="list-heading" className="text-lg font-semibold mb-4">3 tasks remaining</h2>
            <ul
                role="list"
                className="space-y-2"
                aria-labelledby="list-heading">
                {/* Repeat the following block for each todo item */}
                <li className="border p-2 rounded">
                    <div className="flex items-center justify-between">
                        <div>
                            <input id="todo-0" type="checkbox" defaultChecked={true} className="mr-2" />
                            <label htmlFor="todo-0">
                                Eat
                            </label>
                        </div>
                        <div className="space-x-2">
                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                Edit <span className="sr-only">Eat</span>
                            </button>
                            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Delete <span className="sr-only">Eat</span>
                            </button>
                        </div>
                    </div>
                </li>
                {/* End of block */}
            </ul>
        </div>
      );
    }

export default TodDo