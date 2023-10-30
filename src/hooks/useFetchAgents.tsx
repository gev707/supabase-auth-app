import {useEffect, useState} from "react";
import {supabase} from "@/config/supabase";
import {IAgents} from "@/types";

export const useFetchAgents = () => {
    const [agents,setAgents] = useState<IAgents[] | null>([])

    async function getAgents() {
      try {
        const {data:agents,error} = await supabase.from('agents').select('*')
        setAgents(agents);

      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      getAgents()
    },[])

    return {
      agents
    }
}
