// Accordion.tsx

import React, { useState } from "react";

interface AccordionProps {
    items: {
        title: string;
        content: string;
    }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
            {items.map((item, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => handleToggle(index)}
                        className="w-full text-left p-2 bg-blue-500 text-white rounded"
                    >
                        {item.title}
                    </button>
                    {expandedIndex === index && (
                        <div className="p-2 border border-t-0 rounded-b">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
