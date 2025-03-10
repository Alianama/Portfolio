'use client'

import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); 
        };

        handleResize(); 
        window.addEventListener("resize", handleResize); 

        return () => window.removeEventListener("resize", handleResize); 
    }, []);

    return (
        <main className="flex">
            <div className="flex p-10 max-md:flex-col w-full justify-center items-center h-screen">
                <div className="flex w-2/3"></div>
                <div className="flex justify-center items-center w-full h-full">
                    {isMobile ? (
                        <Spline  scene={"/models/macbook-mobile.spline"} />
                    ) : (
                        <Spline  scene={"/models/macbook.spline"} />
                    )}
                </div>
            </div>
        </main>
    );
}
