import {MdDeleteOutline,MdFileCopy} from 'react-icons/md'

type Line = {
  name:string,
  type:string,
  edited:string
}

export const Line = ({name, type, edited}:Line) => {
  return (
    <div className='w-full mt-5 pl-5 pr-5 h-14 items-center grid border-b-2'>
      <div className="flex justify-between items-center">
        <div className="w-full flex  items-center">
          <span className='table-span'>{name}</span>
        </div>
        <div className='flex justify-end items-center w-full'>
          <div className='flex justify-between w-full'>
            <div>
              <span className='table-span'>{type}</span>
            </div>
            <div>
              <span className="table-span">{edited}</span>
            </div>
          </div>
          <div className='w-full'>
            <div className="flex justify-end items-center w-full">
              <div className='flex'>
                <span className="table-span cursor-pointer mr-1">{MdFileCopy()}</span>
                <span className="table-span cursor-pointer">{MdDeleteOutline()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}