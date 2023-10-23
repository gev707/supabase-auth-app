import Button from "@/UI/Button";
import {useRouter} from "next/navigation";

interface IProps {
  id:string,
  handleDelete:(id:string)=> void
}

export default function ConfirmModal({id,handleDelete}:IProps) {
  const router = useRouter()

  const handleConfirm = ()=> {
    handleDelete(id)
  }

  const handleBack =()=> {
    router.back();
  }
  return <div className=' w-64 shadow-xl  grid'>
    <span>Delete agent - {id}</span>
    <Button
      text='Cancel'
      onClick={handleBack}
      type='button'
      className='bg-blue-500 p-2 rounded text-white'
    />
    <Button
      text='Confirm'
      onClick={handleConfirm}
      type='button'
    />
  </div>
}