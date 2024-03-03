import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { TEN_SECONDS } from "../constants/common";
export const Loading: React.FC = () => {
  const tips = [
    "We are looking for your numbers in each draw since 1988. It takes time.",
    "The first draw of BonoLoto was held on 28 February 1988.",
    "Probability of winning the jackpot is 1 in 13,983,816.",
    "The largest BonoLoto jackpot of €10,614,853 was won on January 17, 2024",
    "For prizes below €40,000, no tax is withheld.",
    "We have almost finished checking your numbers.",
  ];
  const [currentTip, setCurrentTip] = useState(tips[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTip((prevTip) => {
        const tipIndex = tips.indexOf(prevTip);
        if (tipIndex < tips.length - 1) {
          return tips[tipIndex + 1];
        } else {
          return tips[0];
        }
      });
    }, TEN_SECONDS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen overflow-clip flex flex-col items-center justify-center h-screen w-screen text-center">
      <div role="status">
        <Spinner />
      </div>
      <p className="mx-2">{currentTip}</p>
    </div>
  );
};
