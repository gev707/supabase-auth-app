import {InputType} from "@/types";


export default function Input({onChange,value,type}:InputType) {
  // @ts-ignore
  return <input type="text" onChange={onChange} value={value} />
}