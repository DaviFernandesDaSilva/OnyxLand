import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: Onyx"
        description="Bem-vindo ao Onyx Website"
        canonical=""
        openGraph={{
          url: "",
        }}
      />
      <Head>
        <title>Onyx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
