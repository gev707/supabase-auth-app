import {InputProps} from "@/types";


export default function Input({
                                onChange,
                                value,
                                type,
                                placeholder,
                                name,
                                id}:InputProps) {
  return <input
    type={type}
    onChange={onChange}
    value={value}
    className="block text-black w-full rounded-lg pl-2 p-2 w-full"
    placeholder={placeholder}
    id={id}
    name={name}
  />
}