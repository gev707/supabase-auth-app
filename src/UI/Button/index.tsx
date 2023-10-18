import {ButtonType} from "../../types";
import {className} from "postcss-selector-parser";

const Button = ({text,onClick,className}:ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;