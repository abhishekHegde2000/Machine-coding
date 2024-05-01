import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
    const [childData, setChildData] = useState<string>("");

    const handleChildData = (data: string) => {
        setChildData(data);
    };

    return (
        <div className="bg-gray-200 p-4">
            <h2 className="text-2xl font-bold mb-4">Parent Component</h2>
            <p className="text-lg">Data from Child: {childData}</p>
            <ChildComponent onChildData={handleChildData} />
        </div>
    );
}

export default ParentComponent;
