'use client'

import Button from "@/UI/Button";
import Input from '@/UI/Input';
import {useAppDispatch} from "@/store";
import {setToggleModal} from "@/store/slices/modal-slice";
import {ChangeEvent, useEffect, useState} from "react";
import {filterAgents} from "@/store/slices/agent-slice";
import {fetchAgents} from "@/store/thunks/list-thunk";

export default function Form () {
  const dispatch = useAppDispatch();
  const [searchValue,setSearchValue] = useState({
    inputValue:''
  });

  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setSearchValue({inputValue:e.target.value})
  }

  const handleFilterAgents = () => {
    dispatch(filterAgents(searchValue.inputValue))
    dispatch(fetchAgents)
  }

  useEffect(()=>{
    handleFilterAgents()
  },[searchValue.inputValue])

  const  handleOpenModal = () => {
      dispatch(setToggleModal())
  }

  return (
    <form
      className='p-3 flex justify-center'
      onSubmit={(e)=>{e.preventDefault()}}
    >
      <div className="flex p-10 justify-center bg-emerald-400 rounded-lg">
          <div className="flex gap-0.5">
            <div className="flex items-center justify pl-2 pr-2 pointer-events-none">
              <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
              <Input
                type="search"
                placeholder="Search"
                onChange={(e)=>handleChange(e)}
                value={searchValue.inputValue}
                className='p-1.5 rounded bg-gray-100 mr-2'
              />
              <Button
                type="submit"
                onClick={handleOpenModal}
                text=' Create New Agents'
                className='bg-blue-400 rounded px-1 font-bold text-white'
              />
          </div>
      </div>

    </form>
  )
}