"use client";
import { FC, useState } from "react";

interface NumberPickerProps {
  onChange: (value: number[]) => void;
}

export const NumberPicker: FC<NumberPickerProps> = ({ onChange }) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const MIN = 1;
  const MAX = 49;
  const MAX_CHOSEN_NUMBERS = 6;

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      const newSelectedNumbers = selectedNumbers.filter((n) => n !== number);
      setSelectedNumbers(newSelectedNumbers);
      onChange(newSelectedNumbers);
    } else if (selectedNumbers.length < MAX_CHOSEN_NUMBERS) {
      const newSelectedNumbers = [...selectedNumbers, number];
      setSelectedNumbers(newSelectedNumbers);
      onChange(newSelectedNumbers);
    }
  };

  const numbers = Array.from({ length: MAX - MIN + 1 }, (_, i) => MIN + i);

  return (
    <div className="grid grid-cols-5 gap-1 mb-3 md:mb-0 md:grid-cols-7">
      {numbers.map((number) => (
        <button
          key={number}
          className={`w-full h-10 rounded border px-1 ${
            selectedNumbers.includes(number)
              ? "bg-lime-500 text-white"
              : "bg-lime-100"
          }`}
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};
