'use client'

import Button from "@/UI/Button";
import Input from '@/UI/Input';
import {useSearch} from "@/hooks/useSearch";
import {useAppDispatch} from "@/store";
import {setToggleModal} from "@/store/slices/modal-slice";

export default function Form () {
  const {searchValue, handleChange} = useSearch();
  const dispatch = useAppDispatch();

 const  handleOpenModal = () => {
    dispatch(setToggleModal())
  }

  return(
  <form className='w-full flex justify-end p-3 border' onSubmit={(e)=>{e.preventDefault()}}>
    <label
      htmlFor='search'
      className="mb-2 text-sm font-medium text-gray-900 sr-only">
      Search
    </label>
    <div className=" p-2 flex justify-end bg-emerald-400 rounded-lg">
      <div className="flex items-center justify pl-2 pr-2 pointer-events-none">
        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <Input type="search"
             id='search'
             placeholder="Search"
             onChange={handleChange}
             value={searchValue}
      />
        <Button type="submit"
                onClick={handleOpenModal}
                text=' Create New Agents'
        />
        </div>

    </form>
)
}