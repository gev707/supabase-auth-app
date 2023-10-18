import {ChangeEvent, useState} from "react";
import {data} from "@/data";

export const useSearch =() => {
  const [searchValue,setSearchValue] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(data)
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value)
    const filtered = data.filter((item) =>{
      return searchValue.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(searchValue)
    })
    setFilteredUsers(filtered);
  }
  const handleSearch = () => {
    const filtered = data.filter((item) =>{
      return searchValue.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(searchValue)
    })
    setFilteredUsers(filtered);
  }
  return {
    filteredUsers,
    handleSearch,
    handleChange,
    searchValue
  }
}
