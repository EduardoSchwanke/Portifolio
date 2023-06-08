import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Contatos() {

    const [popoverShow, setPopoverShow] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setPopoverShow(false)
        }, 5000)
        console.log(popoverShow)
    }, [popoverShow])

    return (
        <>
            <Head>
                <title>Contatos | Schwanke</title> 
            </Head>
            <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
                <h1 className="text-5xl md:text-6xl font-bold text-center">Contatos</h1>
                <ul className="table mx-auto space-y-6 md:space-y-8">
                    <li className="md:text-xl">
                        <span className="font-bold">E-mail</span>
                        <div className="flex gap-1 md:gap-3 items-center">
                            <a href="mailto:carvalhoe089@gmail.com" 
                                className="text-sm md:text-lg text-slate-500 underline truncate"
                            >
                                carvalhoe089@gmail.com
                            </a>
                            <div onClick={() => setPopoverShow(true)}>
                                <CopyButton textToCopy="carvalhoe089@gmail.com"/>
                            </div>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Linkedin</span>
                        <div>
                            <a href="https://www.linkedin.com/in/eduardo-carvalho-schwanke-61944123b/" 
                                className="text-sm md:text-lg text-slate-500 underline truncate"
                            >
                                Eduardo Schwanke
                            </a>
                        </div>
                    </li>
                    <li className="md:text-xl">
                        <span className="font-bold">Github</span>
                        <div>
                            <a href="https://github.com/EduardoSchwanke" 
                                className="text-sm md:text-lg text-slate-500 underline truncate"
                            >
                                EduardoSchwanke
                            </a>
                        </div>
                    </li>
                </ul>
                <div className={`${popoverShow ? 'flex' : 'hidden'} absolute bottom-2 left-[calc(50%-100px)] w-52 bg-white text-green-600 font-bold border-2 px-6 py-3 rounded-xl border-green-600 items-center justify-center transition-all`}>
                    Email copiado!
                </div>
            </div>
        </>
    )
}