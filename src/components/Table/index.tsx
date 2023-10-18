'use client';

import {Line} from "@/components/Table/Line";
import {useSearch} from "@/hooks/useSearch";


export default function Table() {
  const {filteredUsers} = useSearch();

  const newData=
    filteredUsers?.map(item=> {
    return (
      <Line
        key={item.id}
        name={item.name}
        type={item.type}
        edited={item.edited}
        id={item.id}
      />
    )
  })

  return (
    <>
    <div className='w-full mt-5 pl-5 pr-5 h-14 items-center grid border-b-2'>
      <div className="flex justify-between items-center">
        <div className="w-full flex  items-center">
          <span className='table-span text-gray-400'>Name</span>
        </div>
        <div className='flex justify-end items-center w-full'>
          <div className='flex justify-between w-full'>
            <div>
              <span className='table-span text-end text-gray-400'>Type</span>
            </div>
            <div>
              <span className="table-span text-end text-gray-400">Last Edited</span>
            </div>
          </div>
          <div className='w-full'>
            <div className="flex justify-end items-center w-full">
              <div>
                <span className="table-span text-gray-400">Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {newData}
    </>
  )
}