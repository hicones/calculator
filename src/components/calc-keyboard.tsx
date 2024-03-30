import { useEffect } from "react";

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
        "Escape",
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
      className="grid grid-rows-5 gap-y-4 bg-slate-700 rounded-t-xl p-4"
    >
      {calcButtons.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-x-4">
          {row.map((button, buttonIndex) => (
            <button
              key={buttonIndex}
              className={`bg-slate-800 text-white rounded-lg p-4 outline-none ${
                button === "0" ? "col-span-2" : ""
              }`}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
