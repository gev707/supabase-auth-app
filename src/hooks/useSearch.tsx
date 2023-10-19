import {ChangeEvent, useState} from "react";

export const useSearch = () => {
  const [searchValue,setSearchValue] = useState('')
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value)
  }

  return {
    handleChange,
    searchValue
  }
}
