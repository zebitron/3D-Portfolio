import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const AnimatedHeaderSection = ({ 
    subTitle, 
    title, 
    text,
    textColor,
    withScrollTrigger = false,
 }) => {
        const contextRef = useRef(null);
        const headerRef = useRef(null);
     
           useGSAP(() => {
            const tl = gsap.timeline({
                scrollTrigger: withScrollTrigger ? {
                    trigger:contextRef.current,
                }: undefined
            });
            tl.from(contextRef.current, {
                y: "50vh",
                duration:1,
                ease:"circ.out",
            })
            tl.from(headerRef.current, {
                y: "200",
                duration: 1,
                ease: "circ.out",
            },
         "<+0.2"
        )
           }, []);   
    return   <div ref={contextRef}>
                    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%,0 100%)" }}>
                        <div
                            ref={headerRef} 
                            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16
                           translate-y20 ">
    
                         <p 
                            className={`text-2xl font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}>
                                {subTitle}
                                </p>
                            <div className="px-10">
    
                                <h1 className={`text-5xl font-black tracking-[0.2em] banner-text-responsive uppercase text-center 
                                drop-shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)]
                                 transition-all duration-300 transform hover:-translate-y-1 ${textColor}`}>
                                {title}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={`relative px-10 ${textColor}`}>
                        <div className="abosolute inset-x-0 border-t-2" />
                        <div className="py-12 sm:py-16 text-end">
                            <AnimatedTextLines
                            text ={text}
                            className={`font-light uppercase value-text-responsive ${textColor}`}/>
                             
                           
    
                        </div>
                    </div>
                </div>
}

export default AnimatedHeaderSection;