'use client';

import {useSelectorTyped} from "@/store/hooks";
import Modal from "@/components/Modal";
import Form from "@/components/Form";
import Table from "@/components/Table";

export default function Create() {

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
