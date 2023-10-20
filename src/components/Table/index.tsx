'use client';

import {Line} from "@/components/Table/Line";
import {useEffect} from "react";
import {useSelectorTyped} from "@/store/hooks";
import {useAppDispatch} from "@/store";
import {deleteAgentById, fetchAgents} from "@/store/thunks/list-thunk";
import {deleteAgent} from "@/store/slices/list-slice";


export default function Table() {
  const {agents, isLoading} = useSelectorTyped(state=> state.agents)
  const dispatch = useAppDispatch()

  useEffect(()=>{
     dispatch(fetchAgents())
  },[])

  // @ts-ignore
  const handleDelete = (id) => {
    dispatch(deleteAgentById(id))
    dispatch(deleteAgent(id))
  }

  const newData=
    agents?.filter((item) => {
      return item.name.toLowerCase().includes('')
    })?.map(item=> {
      return (
      <Line
        key={item.id}
        name={item.name}
        type={item.type}
        edited={item.edited}
        id={item.id}
        handleDelete={()=>handleDelete(item.id)}
      />
    )
  })

  return (
    <>
      {isLoading
        ? <h1 className='flex justify-center items-center text-center text-5xl text-emerald-500'>Loading</h1>
        : <>
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
      }
    </>

  )
}