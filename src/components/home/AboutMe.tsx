import Link from "next/link";
import { TbBrandTypescript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';

import { Roboto } from 'next/font/google';
import { useEffect, useState } from "react";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function AboutMe() {

    const [effect, setEffect] = useState(false) 

    useEffect(() => {
        setEffect(true)
    }, [])

    return (
        <main className="flex flex-wrap-reverse relative justify-center items-center md:gap-4 py-8 text-lg text-center lg:text-left lg:flex-nowrap lg:justify-between">
            <div className="text-black flex-col items-center gap-4 w-full z-10 select-none">
                <h3 className={`text-sm text-left md:relative ${effect ? 'md:left-2' : 'md:left-40'} md:transition-all md:duration-300`}>
                    Prazer, Sou&nbsp;
                    <span className="font-bold">Eduardo Schwanke</span>    
                </h3>
                <h1 className={`font-bold text-left text-4xl md:text-8xl flex items-end gap-2 text-stone-900 md:relative ${effect ? 'md:left-0' : 'md:left-40'} md:transition-all md:duration-500`}>
                    FRONTEND 
                    <BsLinkedin className="hidden md:block pb-3 w-8 h-fit cursor-pointer hover:pb-5 transition-all"/>
                    <BsGithub className="hidden md:flex pb-3 w-8 h-fit cursor-pointer hover:pb-5 transition-all"/>
                    <AiOutlineFileText className="hidden md:flex pb-3 w-8 h-fit cursor-pointer hover:pb-5 transition-all"/>
                </h1>
                <h1 className={`font-bold text-left text-5xl md:text-9xl text-stone-900 md:relative ${effect ? 'md:left-0' : 'md:left-40'} md:transition-all md:duration-700`}>DEVELOPER</h1>
                <div className="mb-12 mt-2">
                    <h2 className={`${roboto.className} mb-12 md:w-80 text-sm text-left md:relative ${effect ? 'md:left-2' : 'md:left-40'} md:transition-all md:duration-1000`}>Apaixonado por aprender e criar soluções web, atualmente focando em React, Node e Typescript.</h2>
                </div>
                <ul className="flex flex-wrap justify-start xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    <li style={{ backgroundColor: '#2774c0', color: '#ffffff' }} className="w-fit p-2 flex items-center rounded-md text-sm"><TbBrandTypescript size={28} className="pr-1"/>Typescript</li>
                    <li style={{ backgroundColor: '#6bddfa', color: '#000000' }} className="w-fit p-2 flex items-center rounded-md text-sm"><FaReact size={28} className="pr-1"/>React</li>
                    <li style={{ backgroundColor: '#efd81d', color: '#000000' }} className="w-fit p-2 flex items-center rounded-md text-sm"><DiJavascript1 size={28} className="pr-1"/>Javascript</li>
                    <li style={{ backgroundColor: '#000000', color: '#ffffff' }} className="w-fit p-2 flex items-center rounded-md text-sm"><SiNextdotjs size={28} className="pr-1"/>Next.js</li>
                </ul>
            </div>
            
            <div className="hidden relative w-80 xl:w-125 lg:flex flex-wrap gap-4">
                <DiCss3 className="pr-1 text-5xl xl:text-6xl pt-4 text-blue-500 animate-bounce"/>
                <DiJavascript1 className="pr-1 text-6xl xl:text-8xl text-yellow-500 animate-bounce"/>
                <SiNextdotjs className="pr-1 text-7xl xl:text-8xl animate-bounce"/>
                <BsGithub className="pr-1 text-6xl xl:text-7xl animate-bounce"/>
                <FaReact className="pr-1 text-8xl xl:text-9xl text-blue-400 animate-bounce"/>
                <SiTailwindcss className="pr-1 text-6xl xl:text-7xl text-blue-500 animate-bounce"/>
                <div className="w-9 h-15 xl:text-7xl xl:w-14"></div>
                <TbBrandTypescript className="pr-1 text-6xl xl:text-8xl text-blue-700 animate-bounce"/>
                <AiFillHtml5 className="pr-1 text-4xl xl:text-6xl text-orange-600 animate-bounce"/>
            </div>
            
        </main>
    )
}