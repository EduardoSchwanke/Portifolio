import Image from "next/image";
import Link from "next/link";
import { Roboto } from 'next/font/google';
import { Menu } from "./Menu";
import { useState } from 'react'
import { MenuIcon } from "@/components/icons/MenuIcon";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={`${roboto.className} bg-gray-50 border-b-[1px] text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            <Link href='/' className="w-16 h-16">
                <Image src="/Rocket.png" width={200} height={200} alt="minha logo" />
            </Link>
            <button className="p-1 md:hidden" onClick={handleMenu}>
                <MenuIcon/>
            </button>
            <nav className="hidden md:flex items-center gap-10 text-md">
                <Link href='/' className="underline-offset-2 hover:underline">Sobre min</Link>
                {/*<Link href='/'>Portifolio</Link>*/}
                <Link href='/contatos' className="underline-offset-2 hover:underline">Entre em contato</Link>
            </nav>
            <Menu isVisible={isMenuOpen} onClose={handleMenu}/>
        </header>
    )
}