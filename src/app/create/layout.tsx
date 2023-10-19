'use client';

import Form from '@/components/Form'
import Table from "@/components/Table";
import {useSelectorTyped} from "@/store/hooks";
import Modal from "@/components/Modal";

export default function CreateLayout() {
  const {isModalOpen} = useSelectorTyped(state=> state.modal)
  return (
    <div className='flex-col justify-center items-center w-full h-full'>
      {isModalOpen
        ? <Modal/>
        : <>
            <Form />
            <Table />
          </>
      }

    </div>
  )
}