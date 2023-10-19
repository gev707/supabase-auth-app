import {useEffect, useState} from "react";
import {supabase} from "@/config/supabase";
import {Agents} from "@/types";

export const useFetch = () => {
   const [agents,setAgents] = useState<Agents[] | null>([])

  useEffect(()=>{
    getAgents()
  },[])

  async function getAgents() {
    try {
      const {data:agents,error} = await supabase.from('agents').select('*')
      setAgents(agents);

    } catch (error) {
      console.log(error)
    }
  }
  return {
    agents
  }
}