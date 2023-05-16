import Image from "next/image";
import Link from "next/link";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Header() {
    return (
        <header className={`${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            <Link href='/'>
                <Image src="/favicon.ico" width={55} height={55} alt="minha logo" />
            </Link>
            <nav className="hidden md:flex items-center gap-10 text-md">
                <Link href='/' className="underline-offset-2 hover:underline">Sobre min</Link>
                {/*<Link href='/'>Portifolio</Link>*/}
                <Link href='/contatos' className="underline-offset-2 hover:underline">Entre em contato</Link>
            </nav>
        </header>
    )
}