import "tailwindcss/tailwind.css";
export const LotteryBall = ({
  ball,
  index,
  isLatestResult,
}: {
  ball: number | string;
  index: number;
  isLatestResult?: boolean;
}) => {
  const isSpecialBalls = index === 6 || index === 7;
  const isSupplementalBall = index === 6;

  const letter = isSpecialBalls ? String(ball).substring(0, 1) : "";
  const number = isSpecialBalls ? String(ball).substring(1) : ball;

  const bottom = isLatestResult ? "bottom-3" : "bottom-4";

  const ballClassNames = `bg-lime-600 text-white rounded-full h-12 w-12 flex items-center justify-center shadow-md ${
    isSpecialBalls ? "bg-lime-300 text-gray-600" : ""
  }`;
  const containerClassNames = `flex font-bold mb-5 md:mb-0 ${
    isSpecialBalls ? `flex-col relative ${bottom}` : "items-end"
  } ${isLatestResult && isSupplementalBall ? "pl-4 lg:pl-8" : ""}`;

  return (
    <div className={containerClassNames}>
      {isSpecialBalls && <p className="text-center font-bold">{letter}</p>}
      <div className={ballClassNames}>{number}</div>
    </div>
  );
};
