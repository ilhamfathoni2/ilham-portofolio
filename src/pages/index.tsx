import Head from "next/head";
import { Navbar } from "@/components/navbar/navbar";
import { SectionOne } from "@/components/home/sectionOne";
import { About } from "@/components/home/about";
import { Socemed } from "@/components/home/socemed";


export default function Home() {  
  return (
    <>
      <Head>
        <title>Ilham</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/vector/logoIF.svg" />
      </Head>
      <Navbar />
      <Socemed />
      <SectionOne />
      <About />
    </>
  );
}
