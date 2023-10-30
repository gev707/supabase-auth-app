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

  return <div className='grid'>
    <h1 className='text-3xl text-center mt-5'>Add Agent</h1>
    <form
      onSubmit={(e)=>{e.preventDefault()}}
      className=" grid w-72 my-auto shadow-xl p-3 text-center mt-5 rounded"
    >
      <span className='flex justify-end text-red-700' onClick={handleClose}>{MdDisabledByDefault()}</span>
      <span className='p-2 block'></span>
      <Input
        type='text'
        value={agent.name}
        name='name'
        onChange={(e)=>handleChange(e)}
        placeholder='name'
        className='p-1.5 my-2 rounded bg-gray-100 shadow'
      />
      <Input
        type='text'
        value={agent.type}
        name='type'
        onChange={(e)=>handleChange(e)}
        placeholder='type'
        className='p-1.5 my-2 rounded bg-gray-100 shadow'
      />
      <Input
        type='text'
        value={agent.edited}
        name='edited'
        onChange={(e)=>handleChange(e)}
        placeholder='edited'
        className='p-1.5 my-2 rounded bg-gray-100 shadow'
      />
      <Button
        text="Add"
        onClick={handleSubmit}
        type='submit'
        disabled={agent.name === '' || agent.type === '' || agent.edited === ''}
        className='bg-blue-500 my-2 p-1.5 w-1/2 mx-auto rounded hover:bg-blue-700 text-white disabled:opacity-60'
      />
    </form>

  </div>
}