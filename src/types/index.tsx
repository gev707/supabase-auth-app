import {ChangeEvent} from "react";

export type ButtonType = {
  text: string,
  onClick:() => void,
  className?:string
  type: string
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
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type ChangePages = 'create' | 'contacts' | 'campaign' | 'recording'