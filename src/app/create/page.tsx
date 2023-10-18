'use client'
import Table from "@/components/Table";
import Form from "@/components/Form";
import {supabase} from "@/config/supabase";
import {useEffect, useState} from "react";

type Agents = [{
  name:string,
  edited:string,
  type:string,
  id:number
}]

export default function Create() {
  const [agents,setAgents] = useState<Agents>(null)

  useEffect(()=>{
    getAgentsList()
  },[])

  async function getAgentsList() {
      const {data} = await supabase.from('agents').select('*');
      if (data) setAgents(data)
  }

  if (agents) console.log(agents)
  return (
      <>
        <Form />
        <Table />
      </>
  )
}
//
//
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
//
// export default async function Index() {
//   const cookieStore = cookies()
//   const supabase = createServerComponentClient({ cookies: () => cookieStore })
//
//   const { data: agents } = await supabase.from("agents").select();
//   console.log(agents)
//
//   return (
//     <ul className="my-auto text-foreground">
//       {agents?.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }
