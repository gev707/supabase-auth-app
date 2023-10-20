import {ChangeEvent,KeyboardEvent} from "react";

export type ButtonType = {
  text: string,
  onClick:() => void,
  className?:string
  type: string
  disabled?:boolean
}



export interface InputProps {
  type: 'text' | 'search'
  id?:string
  label?: string
  value: string | number
  name?: string
  placeholder?: string
  className?: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?:(e:KeyboardEvent<HTMLInputElement>) => void
}


export interface IAgents   {
  name:string,
  id?:string,
  type:string,
  edited:string
}

