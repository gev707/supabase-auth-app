import {ButtonType} from "../../types";

const Button = ({text,onClick,className}:ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {text}
    </button>
  );
};

export default Button;