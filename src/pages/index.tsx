import Head from "next/head";
import { Navbar } from "./navbar/navbar";
import { SectionOne } from "./home/sectionOne";
import { About } from "./home/about";
import { Socemed } from "./home/socemed";


export default function Home() {  
  return (
    <>
      <Head>
        <title>Ilham</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Socemed />
      <SectionOne />
      <About />
    </>
  );
}
