'use client'

import {MdDeleteForever, MdDeleteOutline, MdEdit, MdFileCopy} from 'react-icons/md'
import {useAppDispatch} from "@/store";
import {IAgents} from "@/types";
import {deleteAgentById, fetchAgents} from "@/store/thunks/list-thunk";
import {setEditedModalForm, setToggleModal} from "@/store/slices/modal-slice";
import {useRouter} from "next/navigation";
import {deleteAgent} from "@/store/slices/list-slice";
import Link from "next/link";

interface LineProps extends IAgents {
 handleDelete?:()=>void
}

export const Line = ({name, type, edited,id,handleDelete }:LineProps) => {

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
                ><Link href={`./create/${id}`}>{MdEdit()}</Link></span>
                <span aria-hidden='true'
                      onClick={handleDelete}
                      className="cursor-pointer text-red-700"
                >{MdDeleteForever()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )

}