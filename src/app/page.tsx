"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NumberPicker } from "../components/NumberPicker";
import { Loading } from "../components/Loading";
import { checkNumbers } from "../services/checkNumbers";

export default function Home() {
  const router = useRouter();

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (newSelectedNumbers: number[]) => {
    setSelectedNumbers(newSelectedNumbers);
  };

  const handleCheckNumbers = async () => {
    setIsLoading(true);

    try {
      const { drawResult, drawDate } = await checkNumbers(selectedNumbers);

      sessionStorage.setItem("drawDate", drawDate),
        sessionStorage.setItem("drawResult", drawResult),
        sessionStorage.setItem(
          "selectedNumbers",
          JSON.stringify(selectedNumbers)
        ),
        router.push("/result");
    } catch (error) {
      console.error("Failed to fetch:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly md:text-xl px-24 pb-4 md:pb-0">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p className="font-bold flex w-full justify-center pt-2 pb-1 md:pb-6 md:pt-0 lg:w-auto lg:p-4">
            Bonoloto
          </p>
          <p className="text-center mb-4">
            Choose your favorite numbers to check if they have ever won.
          </p>
          <NumberPicker onChange={handleChange} />
          <button
            className="z-10 bg-lime-300 hover:bg-lime-500 text-black hover:text-white font-bold py-2 px-4 rounded"
            onClick={handleCheckNumbers}
          >
            Check numbers
          </button>
          <a
            className="flex flex-col items-center justify-center h-auto w-auto pointer-events-none gap-2 whitespace-nowrap p-1 lg:pointer-events-auto lg:p-0"
            href="https://shulga.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/inspiration.svg"
              alt="Inspiration Logo"
              width={100}
              height={24}
              priority
            />
            <strong>by inspiration</strong>
          </a>
        </>
      )}
    </main>
  );
}
