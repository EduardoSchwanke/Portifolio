import Head from "next/head";
import Link from "next/link";

export default function Contatos() {
    return (
        <>
            <Head>
                <title>Contatos | Schwanke</title> 
            </Head>
            <div>
                <h1>Contatos</h1>
                <ul>
                    <li>
                        <span>E-mail</span>
                        <div>
                            <a href="mailto:carvalhoe089@gmail.com">carvalhoe089@gmail.com</a>
                        </div>
                    </li>
                    <li>
                        <span>Linkedin</span>
                        <div>
                            <a href="https://www.linkedin.com/in/eduardo-carvalho-schwanke-61944123b/">Eduardo Schwanke</a>
                        </div>
                    </li>
                    <li>
                        <span>Github</span>
                        <div>
                            <a href="https://github.com/EduardoSchwanke">EduardoSchwanke</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}