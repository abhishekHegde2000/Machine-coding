"use client";

import React, { useState } from "react";
import ChildComp from "./ChildComp";

interface FormState {
    name: string;
    email: string;
}

const ParentComp = () => {
    const [data, setData] = useState<FormState | undefined>({
        name: "",
        email: "",
    });

    const handleChildData = (data: FormState): void => {
        setData(data);
    };
    return (
        <div>
            parent
            <div> child data</div>
            <div>name: {data?.name}</div>
            <div>email: {data?.email}</div>
            <ChildComp onChildData={handleChildData} />
        </div>
    );
};

export default ParentComp;
