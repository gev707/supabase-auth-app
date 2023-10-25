import {ButtonType} from "@/types";

const Button = ({text, onClick, disabled, className}:ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;