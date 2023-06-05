import Link from "next/link";
import { TbBrandTypescript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function AboutMe() {
    return (
        <main className="flex flex-wrap-reverse relative justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center lg:text-left lg:flex-nowrap lg:justify-between">
            <div className="text-black flex-col items-center gap-4 w-full z-10">
                <h3 className="text-sm text-left">
                    Prazer, Sou&nbsp;
                    <span className="font-bold">Eduardo Schwanke</span>    
                </h3>
                <h1 className="font-bold text-left text-4xl md:text-8xl flex items-end gap-2 text-stone-900">
                    FRONTEND 
                    <BsLinkedin className="hidden md:block pb-3 w-8 h-fit cursor-pointer hover:pb-5 transition-all"/>
                    <BsGithub className="hidden md:flex pb-3 w-8 h-fit cursor-pointer hover:pb-5 transition-all"/>
                    <AiOutlineFileText className="hidden md:flex pb-3 w-8 h-fit cursor-pointer hover:pb-5 transition-all"/>
                </h1>
                <h1 className="font-bold text-left text-5xl md:text-9xl text-stone-900">DEVELOPER</h1>
                <div className="mb-12 mt-2">
                    <h2 className={`${roboto.className} mb-12 w-80 text-sm text-left`}>Apaixonado por aprender e criar soluções web, atualmente focando em React, Node e Typescript.</h2>
                </div>
                <ul className="flex flex-wrap justify-start xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    <li style={{ backgroundColor: '#2774c0', color: '#ffffff' }} className="w-fit p-2 flex items-center rounded-md text-sm"><TbBrandTypescript size={28} className="pr-1"/>Typescript</li>
                    <li style={{ backgroundColor: '#6bddfa', color: '#000000' }} className="w-fit p-2 flex items-center rounded-md text-sm"><FaReact size={28} className="pr-1"/>React</li>
                    <li style={{ backgroundColor: '#efd81d', color: '#000000' }} className="w-fit p-2 flex items-center rounded-md text-sm"><DiJavascript1 size={28} className="pr-1"/>Javascript</li>
                    <li style={{ backgroundColor: '#000000', color: '#ffffff' }} className="w-fit p-2 flex items-center rounded-md text-sm"><SiNextdotjs size={28} className="pr-1"/>Next.js</li>
                </ul>
            </div>
            {/*
                <div className="relative">
                    <Image 
                        src="https://avatars.githubusercontent.com/u/64798316?v=4" 
                        alt="minha foto de perfil"
                        unoptimized
                        width={400}
                        height={400}
                        className="rounded-full hover:ring-2 ring-offset-2 ring-offset-h-blue-900 transition-all"
                    />
                </div>
            */}
        </main>
    )
}