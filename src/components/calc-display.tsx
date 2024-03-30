import { CalcStateProps } from "../types/operation";

export function CalcDisplay({ calcState }: { calcState: CalcStateProps }) {
  return (
    <div id="calc-display" className="flex flex-col items-end px-4 gap-2">
      <span className="w-full px-4 text-end h-5 text-lg">
        {calcState.operation ||
          calcState.previousNumber + " " + calcState.operator}
      </span>
      <input
        type="text"
        className="w-full px-4 bg-transparent text-end outline-none text-2xl"
        value={calcState.currentNumber}
        readOnly
      />
    </div>
  );
}
