/* eslint-disable no-case-declarations */
import { useState } from "react";
import { CalcKeyboard } from "./components/calc-keyboard";
import { CalcDisplay } from "./components/calc-display";
import { CalcStateProps } from "./types/operation";

function App() {
  const [calcState, setCalcState] = useState<CalcStateProps>({
    currentNumber: "0",
    operator: "",
    previousNumber: "",
    operation: "",
    reset: false,
  });

  const handleButtonClick = async (button: string) => {
    switch (button) {
      case "Backspace":
      case "Delete":
        setCalcState({
          ...calcState,
          currentNumber: calcState.currentNumber.slice(0, -1),
        });
        break;
      case "AC":
        setCalcState({
          currentNumber: "0",
          operator: "",
          previousNumber: "",
          operation: "",
          reset: false,
        });
        break;
      case "C":
        setCalcState({
          ...calcState,
          currentNumber: "0",
        });
        break;
      case "%":
        setCalcState({
          ...calcState,
          currentNumber: `${
            calcState.previousNumber
              ? (parseFloat(calcState.previousNumber) / 100) *
                parseFloat(calcState.currentNumber)
              : parseFloat(calcState.currentNumber) / 100
          }`,
        });
        break;
      case "X":
      case "/":
      case "-":
      case "+":
        if (calcState.operator && calcState.previousNumber !== "0") {
          const result = eval(
            `${calcState.previousNumber} ${calcState.operator} ${calcState.currentNumber}`
          );
          setCalcState({
            ...calcState,
            currentNumber: "0",
            operator: button === "X" ? "*" : button,
            operation: calcState.operation && "",
            previousNumber: result.toString(),
            reset: false,
          });
        } else {
          setCalcState({
            ...calcState,
            operator: button === "X" ? "*" : button,
            previousNumber: calcState.currentNumber,
            currentNumber: "0",
            operation: calcState.operation && "",
            reset: false,
          });
        }
        break;
      case "=":
        const result = eval(
          `${calcState.previousNumber} ${calcState.operator} ${calcState.currentNumber}`
        );
        setCalcState({
          ...calcState,
          currentNumber: result.toString(),
          operator: "",
          operation: `${calcState.previousNumber} ${calcState.operator} ${calcState.currentNumber} =`,
          reset: true,
        });
        break;
      default:
        if (calcState.reset) {
          setCalcState({
            currentNumber: button,
            operator: "",
            previousNumber: "",
            operation: "",
            reset: false,
          });
        } else {
          setCalcState({
            ...calcState,
            currentNumber:
              calcState.currentNumber === "0"
                ? button
                : `${calcState.currentNumber}${button}`,
          });
        }

        break;
    }
  };

  return (
    <main
      id="calc-container"
      className=" bg-gray-800 rounded-3xl w-full flex flex-col gap-8 overflow-hidden"
    >
      <CalcDisplay calcState={calcState} />
      <CalcKeyboard handleButtonClick={handleButtonClick} />
    </main>
  );
}

export default App;
