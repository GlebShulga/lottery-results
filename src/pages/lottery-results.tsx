"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getLastResults } from "../services/getLastResults";
import { BonolotoResult } from "../services/types";
import { LotteryBall } from "../components/LotteryBall";
import { DetailedResults } from "../components/DetailedResults";

export default function LotteryResults() {
  const [lotteryResults, setLotteryResults] = useState<
    { lotteryResult: BonolotoResult; isDetailedResultsVisible: boolean }[]
  >([]);

  useEffect(() => {
    const fetchResults = async () => {
      const { results } = await getLastResults();
      setLotteryResults(
        results.map((lotteryResult: BonolotoResult) => ({
          lotteryResult,
          isDetailedResultsVisible: false,
        }))
      );
    };

    fetchResults();
  }, []);

  const handleDetailedResults = (index: number) => {
    setLotteryResults(
      lotteryResults.map((item, i) =>
        i === index
          ? {
              ...item,
              isDetailedResultsVisible: !item.isDetailedResultsVisible,
            }
          : item
      )
    );
  };

  return (
    <div className="block justify-center items-center h-12 mx-4">
      <div className="flex text-2xl font-bold text-green-950 cursor-pointer mb-4 mt-2 md:mt-0">
        <Image
          src="/bonoloto-logo.svg"
          alt="bonoloto logo"
          className="mx-2"
          width={20}
          height={20}
        />{" "}
        Bonoloto results
      </div>
      <div className="flex flex-col my-6">
        {lotteryResults.map(
          ({ lotteryResult, isDetailedResultsVisible }, index) => (
            <div key={lotteryResult.date}>
              <div className="flex justify-between px-2 bg-lime-600 text-white font-bold md:mr-8">
                {lotteryResult.date}
                <button
                  className="flex items-center space-x-2"
                  onClick={() => handleDetailedResults(index)}
                >
                  <div>info</div>
                  <Image
                    src={
                      isDetailedResultsVisible
                        ? "/arrow-up.svg"
                        : "/arrow-down.svg"
                    }
                    alt="Arrow"
                    width={15}
                    height={15}
                  />
                </button>
              </div>

              <div className="flex items-center space-x-1 lg:space-x-2 mt-6 mb-3">
                {lotteryResult.numbers.map((number, index) => (
                  <LotteryBall
                    key={number}
                    ball={number}
                    index={index}
                    isLatestResult
                  />
                ))}
              </div>
              {isDetailedResultsVisible && (
                <DetailedResults rows={lotteryResult.prizes} />
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
