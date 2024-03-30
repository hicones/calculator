/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export function CalcHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="flex w-full justify-between items-center px-4 pt-4">
      <h1 className="text-2xl text-center font-medium">Calc</h1>
      <div className="flex gap-4 items-center bg-surface-light dark:bg-surface-dark rounded-full p-2 px-4 justify-between transition-colors">
        <button onClick={() => setTheme("light")}>
          <HiOutlineMoon
            className={`${
              theme === "light" ? "text-yellow-400" : "opacity-60"
            } size-5 transition-colors`}
          />
        </button>
        <button onClick={() => setTheme("dark")}>
          <HiOutlineSun
            className={`${
              theme === "dark" ? "text-yellow-400" : "opacity-60"
            } size-5 transition-colors`}
          />
        </button>
      </div>
    </header>
  );
}
