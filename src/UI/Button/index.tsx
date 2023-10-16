import {ButtonType} from "../../types";

const Index = ({text,onClick,variant}:ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      variant={variant}
    >
      {text}
    </button>
  );
};

export default Index;