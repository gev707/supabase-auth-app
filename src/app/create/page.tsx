'use client';

import {useSelectorTyped} from "@/store/hooks";
import Modal from "@/components/Modal";
import Table from "@/components/Table";
import Form from "@/components/Form";

export default function Create() {

  const {isModalOpen,} = useSelectorTyped(state=> state.modal);

  return (
    <div className='flex justify-center items-center w-full h-full'>
      {
        isModalOpen
          ? <Modal/>
          : <div className='w-5/6'>
              <Form />
              <Table />
            </div>
      }
    </div>
  )
}
