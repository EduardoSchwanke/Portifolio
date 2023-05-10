import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
    return (
        <main>
            <div>
                <h1>Prazer, Sou &nbsp;</h1>
                <span> Eduardo Schwanke</span>
                <div>
                    <h2>Apaixonado por aprender e criar soluções web, atualmente focando em React, Node e Typescript.</h2>
                    <Link href='/contatos'>Converse comigo!</Link>
                </div>
                <ul>
                    <li style={{ backgroundColor: '#2774c0', color: '#ffffff' }}>Typescript</li>
                    <li style={{ backgroundColor: '#6bddfa', color: '#000000' }}>React</li>
                    <li style={{ backgroundColor: '#efd81d', color: '#000000' }}>Javascript</li>
                    <li style={{ backgroundColor: '#000000', color: '#ffffff' }}>Next.js</li>
                </ul>
            </div>
            <div>
                <img  />
                <Image 
                    src="https://avatars.githubusercontent.com/u/64798316?v=4" 
                    alt="minha foto de perfil"
                    unoptimized
                    width={500}
                    height={500}
                />
            </div>
        </main>
    )
}