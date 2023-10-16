'use client'

import { useRouter } from 'next/navigation'
import {ChangePages} from "@/types";

export default function Index() {
  const router = useRouter();

  const changePage = (page:ChangePages) => {
    router.push(page)
  }
  return (
    <header className='flex justify-between items-center pl-5 pr-5 border-b-2'>
        <div className="flex items-center">
          <h1 className='p-3'>Air</h1>
          <ul className='flex items-center'>
            <li onClick={()=>changePage('create')} className='mr-5'>Create</li>
            <li onClick={()=>changePage('contacts')} className='mr-5'>Contacts</li>
            <li onClick={()=>changePage('campaign')} className='mr-5'>Campaign</li>
            <li onClick={()=>changePage('recording')} className='mr-5'>Recording</li>
          </ul>
        </div>
      <div className="">
        <h2>ggg</h2>
      </div>
    </header>
  )
}