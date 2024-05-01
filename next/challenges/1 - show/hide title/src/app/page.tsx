"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [show, setShow] = useState(false);

    let handleShow = () => {
        setShow(!show);
    };
    return (
        <>
            <Button
                onClick={handleShow}
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out"
            >
                click me man
            </Button>
            {show && <div>button clicked</div>}
        </>
    );
}
