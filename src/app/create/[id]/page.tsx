'use client';

import {useParams, useRouter} from "next/navigation";
import {IAgents} from "@/types";
import {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch} from "@/store";
import {editAgent, getSingleAgent} from "@/store/thunks/list-thunk";
import {useSelectorTyped} from "@/store/hooks";
import Input from "@/UI/Input";
import Button from "@/UI/Button";

interface IAgent {
  name:string,
  edited:string,
  type:string
}

export default function CurrentAgent(){
  const router = useRouter();
  const {singleAgent} = useSelectorTyped(state => state.single)
  const dispatch = useAppDispatch();
  const {id} = useParams()
  const [agent,setAgent] = useState<IAgent>({
    name:'',
    edited:'',
    type:''
  })


  useEffect( ()=> {
    handleSingleAgentData()
  },[])


  async function handleSingleAgentData() {
    // @ts-ignore
    await dispatch(getSingleAgent(id));
    setAgent(prevState=> ({...prevState,...singleAgent}))
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAgent({...agent,[e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    const formData = {
      ...agent,
    }
    if (agent?.name?.length && agent.type?.length && agent?.edited?.length) {
      dispatch(editAgent(formData))
    }
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
            text="Add"
            onClick={handleSubmit}
            type='submit'
          />
        </div>
      </>
    )
  }