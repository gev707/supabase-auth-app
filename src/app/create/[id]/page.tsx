'use client';

import {ChangeEvent, useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {useAppDispatch} from "@/store";
import {useSelectorTyped} from "@/store/hooks";
import {editAgent, fetchAgents, getSingleAgent} from "@/store/thunks/list-thunk";
import Input from "@/UI/Input";
import Button from "@/UI/Button";
import {MdDisabledByDefault} from "react-icons/md";

interface IAgent {
  name:string,
  edited:string,
  type:string,
}

export default function CurrentAgent(){
  const {id} = useParams()
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {singleAgent} = useSelectorTyped(state => state.single)
  const [agent,setAgent] = useState<IAgent>({
    name:'',
    edited:'',
    type:''
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAgent({...agent,[e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
      await dispatch(editAgent({...agent}))
      await dispatch(fetchAgents())
      handleClose()
  }

  const handleClose=()=>{
    router.back()
  }

  async function handleSingleAgentData():Promise<void> {
    await dispatch(getSingleAgent(id));
    setAgent(prevState=> ({...prevState,...singleAgent}))
  }

  useEffect( ()=> {
    handleSingleAgentData()
  },[id])

    return (
      <>
        <h1 className='text-3xl text-center mt-5'>Edit Current Agent-{id}</h1>
        <div className="mx-auto shadow-xl w-72 p-3 flex-col text-center mt-5">
          <span className='flex justify-end text-red-700' onClick={handleClose}>{MdDisabledByDefault()}</span>
          <Input
            type='text'
            value={agent.name}
            name='name'
            onChange={(e) => handleChange(e)}
            placeholder='name'
            className='p-1.5 my-2 rounded bg-gray-100 shadow'
          />
          <Input
            type='text'
            value={agent.type}
            name='type'
            onChange={(e) => handleChange(e)}
            placeholder='type'
            className='p-1.5 my-2 rounded bg-gray-100 shadow'

          />
          <Input
            type='text'
            value={agent.edited}
            name='edited'
            onChange={(e) => handleChange(e)}
            placeholder='edited'
            className='p-1.5 my-2 rounded bg-gray-100 shadow'
          />

          <Button
            text="Edit"
            onClick={handleSubmit}
            type='submit'
            disabled={agent.name === '' || agent.type === '' || agent.edited === ''}
            className='bg-blue-500 my-2 p-1.5 w-1/2 mx-auto rounded hover:bg-blue-700 text-white disabled:opacity-60'
          />
        </div>
      </>
    )
  }