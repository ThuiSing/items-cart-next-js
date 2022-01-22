import Head from "next/head";
import Products from "../components/Products";
import PromisedSection from "../components/PromisedSection";
import TopBgCard from "../components/TopBgCard";

export default function Home() {
  const SLIDE_COUNT = 10;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopBgCard />
        <PromisedSection />
        <Products />
      </main>
      {/* <EmblaCarousel slides={slides} /> */}
      <footer className="text-center bg-secondary p-3">
        <p className="mb-0 text-white">Thanks for Visiting Here &#9829;</p>
      </footer>
    </div>
  );
}
