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
        <main className="flex flex-col ">
            <div className="flex p-10 max-md:flex-col w-full justify-center items-center h-screen">
                <div className="flex max-md:absolute top-50 flex-col max-md: max-md:gap-3 max-md:w-full max-md:justify-start max-md:items-center gap-10 w-3/3">
                    <TypingAnimation className="text-7xl max-md:text-xl  dark:text-white" >ALI PURNAMA ALAM</TypingAnimation>
                    <div className="flex gap-0 max-md:justify-center max-md:items-center flex-col" >
                        <h1 className="text-xl max-md:text-sm font-bold text-black dark:text-white" >Crafting digital experiences</h1>
                        <div className="flex items-center gap-2 " >
                            <h1 className="text-xl max-md:text-sm font-bold text-black dark:text-white" >with passion and precision as a</h1>
                            <WordRotate
                                className="text-xl max-md:text-sm font-bold text-black dark:text-white"
                                words={["Web Dev", "FrontEnd Dev", "React JS Dev", "ICT Enthusiast"]}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full max-md:absolute top-30 ">
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
