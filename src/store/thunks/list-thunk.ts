import {createAsyncThunk} from "@reduxjs/toolkit";
import {supabase} from "@/config/supabase";

export const fetchAgentsList = createAsyncThunk(
  'agents',
  async () => {
    const response  = await supabase.from('agents').select()
    return response.data
  }
)