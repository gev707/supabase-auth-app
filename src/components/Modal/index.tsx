import Input from "@/UI/Input";
import Button from "@/UI/Button";
import {useAppDispatch} from "@/store";
import {setToggleModal} from "@/store/slices/modal-slice";
import {ChangeEvent, useState} from "react";
import {addAgent} from "@/store/thunks/list-thunk";
import {MdDisabledByDefault} from "react-icons/md";

interface IAgent {
  name:string,
  type:string,
  edited:string
}

export default function Modal() {
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

  const handleSubmit = () => {

    if(agent.name !== '' && agent.type !== '' && agent.edited !== '') {
      dispatch(addAgent({...agent}));
      dispatch(setToggleModal())
    }
  }

  return <>
    <form
      onSubmit={(e)=>{e.preventDefault()}}
      className=" flex-col gap-1.5 w-72 mr-auto ml-auto bg-blue-50 p-3 text-center mt-2"
    >
      <span className='flex justify-end' onClick={handleClose}>{MdDisabledByDefault()}</span>
      <span className='p-2 block'></span>
      <Input
        type='text'
        value={agent.name}
        name='name'
        onChange={(e)=>handleChange(e)}
        placeholder='name'
      />
      <span className='p-2 block'></span>
      <Input
        type='text'
        value={agent.type}
        name='type'
        onChange={(e)=>handleChange(e)}
        placeholder='type'
      />
      <span className='p-2 block'></span>
      <Input
        type='text'
        value={agent.edited}
        name='edited'
        onChange={(e)=>handleChange(e)}
        placeholder='edited'
      />
      <span className='p-2 block'></span>
      <Button
        text="Add"
        onClick={handleSubmit}
        type='submit'
        disabled={agent.name === '' || agent.type === '' || agent.edited === ''}
      />
    </form>

  </>
}