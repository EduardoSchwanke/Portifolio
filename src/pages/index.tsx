import AboutMe from "@/components/home/AboutMe";
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
      <div>
        <AboutMe />
      </div>
    </>
  )
}
