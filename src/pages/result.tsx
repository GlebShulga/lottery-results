"use client";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LotteryBall } from "../components/LotteryBall";

export default function Result() {
  const router = useRouter();
  const [routeState, setRouteState] = useState({
    drawDate: "",
    drawResult: "",
    selectedNumbers: [],
  });

  const handleCheckNumbers = async () => {
    router.push("/");
  };

  useEffect(() => {
    const drawDate = sessionStorage.getItem("drawDate") ?? "";
    const drawResult = sessionStorage.getItem("drawResult") ?? "";
    const selectedNumbers = JSON.parse(
      sessionStorage.getItem("selectedNumbers") ?? "[]"
    );
    setRouteState({ drawDate, drawResult, selectedNumbers });
  }, []);

  const numbers = routeState.drawResult
    .split(/ - | /)
    .map((s) => s.replace(/[\(\) ]/g, ""));

  return (
    <div className="flex flex-col items-center justify-center py-20 md:py-40">
      {!!routeState.drawResult ? (
        <div className="text-2xl font-bold mb-6 flex flex-col items-center">
          <div className="text-balance text-center md:mb-5">
            Last time your number won in draw on {routeState.drawDate}
          </div>
          <div className="flex flex-col mt-8 mb-3 items-center">
            <span className="mb-3">Draw result:</span>
            <div className="flex flex-wrap justify-center items-center justify-items-center space-x-2">
              {numbers.map((number, index) => (
                <LotteryBall key={number} ball={number} index={index} />
              ))}{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-2xl font-bold mb-5 flex flex-col md:flex-row items-center">
          Numbers
          <div className="flex space-x-2 mx-4 my-3">
            {routeState.selectedNumbers.map((number, index) => (
              <LotteryBall key={index} ball={number} index={index} />
            ))}
          </div>
          didn't win in any draw
        </div>
      )}
      <button
        className="z-10 bg-lime-300 hover:bg-lime-500 text-black hover:text-white font-bold py-2 px-4 rounded"
        onClick={handleCheckNumbers}
      >
        Check other numbers
      </button>
    </div>
  );
}
