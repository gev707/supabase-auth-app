import Input from "@/UI/Input";
import Button from "@/UI/Button";
import {useAppDispatch} from "@/store";
import {setToggleModal} from "@/store/slices/modal-slice";
import {ChangeEvent, useEffect, useState} from "react";
import {addAgent, editAgent} from "@/store/thunks/list-thunk";
import {useSelectorTyped} from "@/store/hooks";

interface IAgent {
  name:string,
  type:string,
  edited:string
}

export default function Modal() {
  const {isEdited,singleAgent} = useSelectorTyped(state=>state.modal)
  const {agents} = useSelectorTyped(state=>state.agents)
  const [agent,setAgent] = useState<IAgent>({
    name:'',
    type:'',
    edited:''
  })
  const dispatch = useAppDispatch();
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAgent( {...agent,[e.target.name]: e.target.value})
  }

  const handleClose = () => {
    dispatch(setToggleModal())
  }
  useEffect(()=>{
    setAgent(prevState => ({...prevState,...singleAgent}))
  },[isEdited]);

  const handleSubmit = () => {
    const formData:IAgent = {
      ...agent,
    }
    if(agent.name.length && agent.type.length && agent.edited.length) {
      isEdited
        ? dispatch(editAgent(formData))
        :dispatch(addAgent(formData));
      dispatch(setToggleModal())
    }
  }

  return <>
    <div className="mr-auto ml-auto bg-blue-50 w-64 h-64 p-3 flex-col text-center">
      <p onClick={handleClose}>X</p>
      <Input
        type='text'
        value={agent.name}
        name='name'
        onChange={(e)=>handleChange(e)}
        placeholder='name'
      />
      <Input
        type='text'
        value={agent.type}
        name='type'
        onChange={(e)=>handleChange(e)}
        placeholder='type'
      />
      <Input
        type='text'
        value={agent.edited}
        name='edited'
        onChange={(e)=>handleChange(e)}
        placeholder='edited'
      />
      <Button
        text="Add"
        onClick={handleSubmit}
        type='submit'
      />
    </div>

  </>
}