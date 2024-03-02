"use client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isSpecificPage = router.pathname === "/lottery-results";
  const widthClass = isSpecificPage ? "w-fit md:w-full" : "w-full";

  return (
    <div className={`${inter.className} ${widthClass} h-screen`}>
      <Head>
        <title>Bonoloto Lottery</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
