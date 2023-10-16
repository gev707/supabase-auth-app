'use client'

import Button from "@/UI/Button";
import Input from '@/UI/Input';
import {ChangeEvent, useState} from "react";


export default function Index () {
  const [searchValue,setSearchValue] = useState('')
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value)
  }
  const handleSearch = () => {
    console.log('yes')
  }


  // @ts-ignore
  return <form action="" className='flex justify-end'>
    <Input type='search' onChange={handleChange} value={searchValue}/>
    <Button text='New Agents' onClick={handleSearch} variant='primary' />
  </form>
}