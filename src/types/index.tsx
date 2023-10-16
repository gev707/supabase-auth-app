import {ChangeEvent} from "react";

export type ButtonType = {
  text: string,
  onClick:()=>void,
  variant:string
}


export interface InputType {
  value:string,
  type:string,
  onChange:ChangeEvent<HTMLInputElement>
}

export type ChangePages = 'create' | 'contacts' | 'campaign' | 'recording'