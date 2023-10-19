'use client'

import {MdDeleteOutline,MdFileCopy} from 'react-icons/md'
import {useAppDispatch} from "@/store";
import {IAgents} from "@/types";
import {deleteAgentById, getSingleAgent} from "@/store/thunks/list-thunk";
import {setEditedModalForm, setToggleModal} from "@/store/slices/modal-slice";

export const Line = ({name, type, edited,id}:IAgents) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    // @ts-ignore
    dispatch(deleteAgentById(id))
  }

  const handleOpenEditModal = () => {
    // @ts-ignore
    dispatch(getSingleAgent(id))
    dispatch(setEditedModalForm())
    dispatch(setToggleModal())
  }

  return (
    <>
    <div className='w-full mt-5 pl-5 pr-5 h-14 items-center grid border-b-2'>
      <div className="flex justify-between items-center">
        <div className="w-full flex  items-center">
          <span className='table-span'>{name}</span>
        </div>
        <div className='flex justify-end items-center w-full'>
          <div className='flex justify-between w-full'>
            <div>
              <span className='table-span'>{type}</span>
            </div>
            <div>
              <span className="table-span">{edited}</span>
            </div>
          </div>
          <div className='w-full'>
            <div className="flex justify-end items-center w-full">
              <div className='flex'>
                <span
                  className="cursor-pointer mr-1"
                  onClick={handleOpenEditModal}
                >{MdFileCopy()}</span>
                <span aria-hidden='true'
                      onClick={handleDelete}
                      className="cursor-pointer"
                >{MdDeleteOutline()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )

}