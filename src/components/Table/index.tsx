'use client';

import {useEffect} from "react";
import {useAppDispatch} from "@/store";
import {useSelectorTyped} from "@/store/hooks";
import {Line} from "@/components/Table/Line";
import {deleteAgentById, fetchAgents} from "@/store/thunks/list-thunk";
import {deleteAgent} from "@/store/slices/agent-slice";


export default function Table() {
  const {filteredAgents:agents, isLoading} = useSelectorTyped(state=> state.agents)
  const dispatch = useAppDispatch()
  // @ts-ignore
  const handleDelete = (id) => {
    dispatch(deleteAgentById(id))
    dispatch(deleteAgent(id))
  }

  useEffect(()=>{
     dispatch(fetchAgents())
  },[])


  const newData=
    agents?.map(item=> {
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
            <div>
                <h1 className='text-emerald-500 font-bold text-3xl text-center mt-24 mb-24'>Agents List</h1>
                <div className='mt-5 pl-5 pr-5 h-14 border-b-2'>
                  <div className="flex justify-between">
                    <div>
                      <span className='table-span text-gray-400'>Name</span>
                    </div>
                    <div>
                      <span className='table-span text-gray-400'>Type</span>
                    </div>
                    <div>
                      <span className="table-span  text-gray-400">Last Edited</span>
                    </div>
                    <div>
                        <span className="table-span text-gray-400">Actions</span>
                    </div>
                  </div>
                </div>
                {newData}
              </div>
          </>
      }
    </>

  )
}