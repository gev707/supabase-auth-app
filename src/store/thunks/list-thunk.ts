import {createAsyncThunk} from "@reduxjs/toolkit";
import {supabase} from "@/config/supabase";
import {IAgents} from "@/types";

export const fetchAgents = createAsyncThunk(
  'agents/getAgentsList',
  async () => {
    try {
      const {data} = await supabase
        .from('agents')
        .select('*');
        return data
    }catch (error) {
      return error
    }
  }
)
export const deleteAgentById = createAsyncThunk(
  'agents/deleteAgentById',
  async (id)=> {
    const response = await supabase
      .from('agents')
      .delete()
      .eq('id',id)
    return response.data
  }
)
export const addAgent = createAsyncThunk(
  'agents/addAgent',
  async (formData:IAgents) => {
    const {data,error} = await  supabase
      .from('agents')
      .insert({...formData})
  }
)

export const getSingleAgent = createAsyncThunk (
  'agents/getSingleAgent',
  async (id) => {
      const {data} = await supabase
        .from('agents')
        .select()
        .eq('id',id)
        .single()
    return data
  }
)
export const editAgent = createAsyncThunk (
  'agents/editAgent',
  async ({name, type, edited, id}:IAgents) => {
    const {data,error} = await supabase
      .from('agents')
      .update({name, type, edited})
      .eq('id',id)
    return data
  }
)