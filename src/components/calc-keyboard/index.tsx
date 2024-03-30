import { useEffect } from "react";
import { CalcButton } from "../calc-button";

export function CalcKeyboard({
  handleButtonClick,
}: {
  handleButtonClick: (button: string) => void;
}) {
  const calcButtons = [
    ["AC", "C", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const button = event.key;
      const validButtons = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        "Enter",
        "=",
        ".",
        "Backspace",
        "Delete",
      ];

      if (validButtons.includes(button)) {
        handleButtonClick(
          button === "Enter" ? "=" : button === "*" ? "X" : button
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div
      id="calc-keyboard"
      className="grid grid-rows-5 gap-y-4 dark:bg-surface-dark bg-surface-light rounded-t-xl p-4 mt-4 transition-colors"
    >
      {calcButtons.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-x-4">
          {row.map((button, buttonIndex) => (
            <CalcButton
              key={buttonIndex}
              button={button}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
