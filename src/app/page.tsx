'use client'

import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import {TypingAnimation} from "@/components/magicui/typing-animation";
import {WordRotate} from "@/components/magicui/word-rotate";


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
                <div className="flex flex-col gap-10 w-3/3">
                    <TypingAnimation className="text-7xl dark:text-milk-white " startOnView={true} >ALI PURNAMA ALAM</TypingAnimation>
                    <div className="flex flex-col" >
                        <h1 className="text-xl font-bold text-black dark:text-white" >Crafting digital experiences</h1>
                        <div className="flex items-center gap-2 " >
                            <h1 className="text-xl font-bold text-black dark:text-white" >with passion and precision as a</h1>
                            <WordRotate
                                className="text-xl font-bold text-black dark:text-white"
                                words={["Web Developer", "FrontEnd Developer", "React JS Developer", "ICT Enthusiast"]}
                            />
                        </div>
                    </div>
                </div>
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
