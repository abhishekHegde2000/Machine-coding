"use client";

import React, { useState } from "react";

const ChildComp = ({
    onChildData,
}: {
    onChildData: (data: { name: string; email: string }) => void;
}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onChildData({ name, email });
    };

    return (
        <div>
            child
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="border border-gray-300 rounded-md px-2 py-1"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border border-gray-300 rounded-md px-2 py-1"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ChildComp;
