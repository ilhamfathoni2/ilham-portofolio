import Head from "next/head";
import { Navbar } from "@/components/navbar/navbar";
import { SectionOne } from "@/components/home/sectionOne";
import { About } from "@/components/home/about";
import { Socemed } from "@/components/home/socemed";
import { Experience } from "@/components/home/experience";
import { Portofolio } from "@/components/home/portofolio";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ilham</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Ilham Fathoni" />
        <link rel="icon" href="/assets/vector/logoIF.svg" />
      </Head>
      <Navbar />
      <Socemed />
      <SectionOne />
      <About />
      <Experience />
      <Portofolio />
      <Footer />
    </>
  );
}
