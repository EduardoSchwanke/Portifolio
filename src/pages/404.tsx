import { Roboto } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  });

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Schwanke</title> 
            </Head>
            <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 md:gap-4 px-6 md:px-32">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="flex flex-col gap-8 md:gap-4">
                    <span>Ops, não conseguimos encontrar essa página!</span>
                    <span>Cique no botão abaixo para ser redirecionado à Página Inicial</span>
                </p>
                <Link href='/' className={`${roboto.className} p-4 bg-h-blue-500 text-black font-bold rounded-xl mt-5 md:mt-12 w-fit`}>Ir para página inical</Link>
            </div>
        </>
    )
}