import Image from "next/image";
import Link from "next/link";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function Header() {
    return (
        <header className={roboto.className}>
            <Link href='/'>
                <Image src="/favicon.ico" width={55} height={55} alt="minha logo" />
            </Link>
            <nav>
                <Link href='/'>Sobre min</Link>
                {/*<Link href='/'>Portifolio</Link>*/}
                <Link href='/contatos'>Entre em contato</Link>
            </nav>
        </header>
    )
}