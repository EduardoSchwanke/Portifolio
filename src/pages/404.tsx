import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Schwanke</title> 
            </Head>
            <div>
                <div>
                    <h1>404</h1>
                    <p>Ops, não conseguimos encontrar essa página!</p>
                    <span>Cique no botão abaixo para ser redirecionado à Página Inicial</span>
                </div>
                <Link href='/'>Ir para página inical</Link>
            </div>
        </>
    )
}