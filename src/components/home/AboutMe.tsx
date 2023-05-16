import Image from "next/image";
import Link from "next/link";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function AboutMe() {
    return (
        <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
            <div className="text-white flex-col items-center xl:items-start gap-4 w-full xl:w-120">
                <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
                    Prazer, Sou&nbsp;
                    <span className="font-bold">Eduardo Schwanke</span>    
                </h1>
                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12`}>Apaixonado por aprender e criar soluções web, atualmente focando em React, Node e Typescript.</h2>
                    <Link href='/contatos' className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse comigo!</Link>
                </div>
                <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    <li style={{ backgroundColor: '#2774c0', color: '#ffffff' }} className="w-fit p-2 rounded-md">Typescript</li>
                    <li style={{ backgroundColor: '#6bddfa', color: '#000000' }} className="w-fit p-2 rounded-md">React</li>
                    <li style={{ backgroundColor: '#efd81d', color: '#000000' }} className="w-fit p-2 rounded-md">Javascript</li>
                    <li style={{ backgroundColor: '#000000', color: '#ffffff' }} className="w-fit p-2 rounded-md">Next.js</li>
                </ul>
            </div>
            <div className="relative">
                <Image 
                    src="https://avatars.githubusercontent.com/u/64798316?v=4" 
                    alt="minha foto de perfil"
                    unoptimized
                    width={500}
                    height={500}
                    className="rounded-full hover:ring-2 ring-offset-2 ring-offset-h-blue-900 transition-all"
                />
            </div>
        </main>
    )
}