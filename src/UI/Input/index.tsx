import {InputProps} from "@/types";
import {className} from "postcss-selector-parser";


export default function Input({
                                onChange,
                                value,
                                type,
                                placeholder,
                                name,
                                id,
                                className}:InputProps) {
  return <input
    type={type}
    onChange={onChange}
    value={value}
    className={className}
    placeholder={placeholder}
    id={id}
    name={name}
  />
}