import AboutMe from "@/components/home/AboutMe";
import { Portifolio } from "@/components/home/Portifolio";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
       <title>Sobre mim | Schwanke</title> 
       <meta 
        name="description"
        content="Apaixonado por aprender e criar soluções web, atualmente focando em React, Node e Typescript. ;)"  
      />
      </Head>
      <div className="pb-12 px-6 md-px-32 space-y-10">
        <AboutMe />
        <Portifolio/>
      </div>
    </>
  )
}
