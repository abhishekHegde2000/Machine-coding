import React, { useState } from "react";

type ChildProps = {
    onChildData: (data: string) => void;
};

function ChildComponent({ onChildData }: ChildProps) {
    const [inputValue, setInputValue] = useState<string>("");

    console.log(`function log = ${onChildData}`);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const sendDataToParent = () => {
        onChildData(inputValue);
        setInputValue("");
    };

    return (
        <div className="bg-blue-500 p-4">
            <h3 className="text-white text-lg font-bold mb-2">
                Child Component
            </h3>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter data"
                className="border border-gray-300 rounded-md px-3 py-2 mb-2"
            />
            <button
                onClick={sendDataToParent}
                className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white"
            >
                Send Data to Parent
            </button>
        </div>
    );
}

export default ChildComponent;
