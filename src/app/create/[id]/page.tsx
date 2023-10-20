'use client';

import {ChangeEvent, useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {useAppDispatch} from "@/store";
import {useSelectorTyped} from "@/store/hooks";
import {editAgent, fetchAgents, getSingleAgent} from "@/store/thunks/list-thunk";
import Input from "@/UI/Input";
import Button from "@/UI/Button";

interface IAgent {
  name:string,
  edited:string,
  type:string
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


  useEffect( ()=> {
    async function handleSingleAgentData():Promise<void> {
      // @ts-ignore
      await dispatch(getSingleAgent(id));
      setAgent(prevState=> ({...prevState,...singleAgent}))
    }
    handleSingleAgentData()
  },[id])



  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAgent({...agent,[e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
      await dispatch(editAgent({...agent}))
      await dispatch(fetchAgents())
      router.back()
  }
    return (
      <>
        <h1 className='text-lg text-center mt-2'>Edit Current Agent-{id}</h1>
        <div className="mr-auto ml-auto bg-blue-50 w-72 h-64 p-3 flex-col text-center mt-2">
          <Input
            type='text'
            value={agent.name}
            name='name'
            onChange={(e) => handleChange(e)}
            placeholder='name'
          />
          <span className='p-2 block'></span>
          <Input
            type='text'
            value={agent.type}
            name='type'
            onChange={(e) => handleChange(e)}
            placeholder='type'
          />
          <span className='p-2 block'></span>
          <Input
            type='text'
            value={agent.edited}
            name='edited'
            onChange={(e) => handleChange(e)}
            placeholder='edited'
          />
          <span className='p-2 block'></span>

          <Button
            text="Edit"
            onClick={handleSubmit}
            type='submit'
            disabled={agent.name === '' || agent.type === '' || agent.edited === ''}
          />
        </div>
      </>
    )
  }