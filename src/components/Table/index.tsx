import {Line} from "@/components/Table/Line";

const data = [
  {name:'Ben - Short (ROBOT - ADVANCED)' , type:'Sales' , edited: '4 days'},
  {name:'Ben - Long (ROBOT - ADVANCED)' , type:'Sales' , edited: '4 days'},
  {name:'Jen - Short (ROBOT - ADVANCED)' , type:'Sales' , edited: '4 days'}
]

export default function Index() {
  const newData = data.map(item=>{
    return (
      <Line name={item.name} type={item.type} edited={item.edited} />
    )
  })
  return (
    <>
    <div className='w-full mt-5 pl-5 pr-5 h-14 items-center grid border-b-2'>
      <div className="flex justify-between items-center">
        <div className="w-full flex  items-center">
          <span className='table-span text-gray-400'>Name</span>
        </div>
        <div className='flex justify-end items-center w-full'>
          <div className='flex justify-between w-full'>
            <div>
              <span className='table-span text-end text-gray-400'>Type</span>
            </div>
            <div>
              <span className="table-span text-end text-gray-400">Last Edited</span>
            </div>
          </div>
          <div className='w-full'>
            <div className="flex justify-end items-center w-full">
              <div>
                <span className="table-span text-gray-400">Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {newData}
    </>
  )
}