'use client';

import Input from "@/UI/Input";
import Button from "@/UI/Button";

export function Auth() {
  return <>
    <form
      className=" flex-col gap-1.5 w-72 mr-auto ml-auto bg-blue-50 p-3 text-center mt-2"
    >
      <span className='p-2 block text-emerald-500'>
        Sign In
      </span>
      <Input
        type='text'
        value=''
        name='name'
        onChange={()=>{}}
        placeholder='username'
      />
      <span className='p-2 block'></span>
      <Input
        type='text'
        value=''
        name='type'
        onChange={()=>{}}
        placeholder='email'
      />
      <span className='p-2 block'></span>
      <Input
        type='text'
        value=''
        name='edited'
        onChange={()=>{}}
        placeholder='password'
      />
      <span className='p-2 block'></span>
      <Button
        text="Add"
        onClick={()=>{}}
        type='submit'
        disabled={true}
      />
    </form>
  </>
}