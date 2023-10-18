import {InputProps} from "@/types";


export default function Input({
                                onChange,
                                value,
                                type,
                                className,
                                placeholder,
                                id}:InputProps) {
  return <input
    type={type}
    onChange={onChange}
    value={value}
    className={className}
    placeholder={placeholder}
    id={id}
  />
}