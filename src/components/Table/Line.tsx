'use client'

import Link from "next/link";
import {MdDeleteForever, MdEdit} from 'react-icons/md'
import {IAgents} from "@/types";
import {setToggleConfirmModal} from "@/store/slices/modal-slice";
import {useAppDispatch} from "@/store";
import {useSelectorTyped} from "@/store/hooks";
import ConfirmModal from "@/components/Modal/ConfirmModal";

interface LineProps extends IAgents {
 handleDelete?:()=>void
}

export const Line = ({name, type, edited,id,handleDelete }:LineProps) => {
  const dispatch = useAppDispatch()


  return (
        <div className=' mt-5 pl-5 pr-5 h-14 border-b-2'>
              <div className="flex justify-between">
                <div>
                  <span className='table-span'>{name}</span>
                </div>
                <div>
                  <span className='table-span'>{type}</span>
                </div>
                <div>
                  <span className="table-span">{edited}</span>
                </div>
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
  )

}