export const CalcButton = ({
  button,
  handleButtonClick,
}: {
  button: string;
  handleButtonClick: (button: string) => void;
}) => {
  const isOperator = (button: string) => ["+", "-", "X", "/"].includes(button);
  const isFunctionButton = (button: string) =>
    ["AC", "C", "%"].includes(button);

  if (isOperator(button)) {
    return (
      <button
        className={`bg-button-light dark:bg-button-dark text-red-400 dark:text-red-200 font-medium rounded-lg py-4 px-8 outline-none border-2 dark:border-[#FFFFFF14] border-[#00000014] dark:hover:bg-[#FFFFFF14] hover:bg-[#21212114] dark:hover:border-button-dark hover:border-button-light transition duration-300 shadow-lg`}
        onClick={() => handleButtonClick(button)}
      >
        {button}
      </button>
    );
  }

  if (isFunctionButton(button)) {
    return (
      <button
        className={`bg-button-light dark:bg-button-dark text-blue-400 dark:text-blue-200 font-medium rounded-lg py-4 px-8 outline-none border-2 dark:border-[#FFFFFF14] border-[#00000014] dark:hover:bg-[#FFFFFF14] hover:bg-[#21212114] dark:hover:border-button-dark hover:border-button-light transition duration-300 shadow-lg`}
        onClick={() => handleButtonClick(button)}
      >
        {button}
      </button>
    );
  }

  if (button === "=") {
    return (
      <button
        className={`bg-red-400 dark:bg-red-200 font-medium rounded-lg py-4 px-8 outline-none dark:hover:bg-red-400 hover:bg-red-200 transition duration-300 shadow-lg`}
        onClick={() => handleButtonClick(button)}
      >
        {button}
      </button>
    );
  }

  return (
    <button
      className={`bg-button-light dark:bg-button-dark font-medium rounded-lg py-4 px-8 outline-none border-2 dark:border-[#FFFFFF14] border-[#00000014] dark:hover:bg-[#FFFFFF14] hover:bg-[#21212114] dark:hover:border-button-dark hover:border-button-light transition duration-300 shadow-lg ${
        button === "0" ? "col-span-2" : ""
      }`}
      onClick={() => handleButtonClick(button)}
    >
      {button}
    </button>
  );
};
