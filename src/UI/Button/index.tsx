import {ButtonType} from "@/types";

const Button = ({text,onClick}:ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white text-sm whitespace-nowrap w-full bg-emerald-500 p-3 focus:outline-none rounded-lg px-4 py-2"
    >
      {text}
    </button>
  );
};

export default Button;