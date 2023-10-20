import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAgents} from "@/types";
import {deleteAgentById, fetchAgents} from "@/store/thunks/list-thunk";

interface AgentsState {
  agents:IAgents[],
  filteredAgents:IAgents[],
  isLoading :boolean,
  error:string

}

const initialState:AgentsState = {
  agents: [],
  filteredAgents: [],
  isLoading:false,
  error:'',
}

export const agents = createSlice({
  name: 'agents',
  initialState,
  reducers:{
    deleteAgent:(state,action:PayloadAction<string>)=> {
      state.agents = state.agents.filter(item=> item.id !== action.payload)
    },
    filterAgents: (state,action)=> {
      state.filteredAgents = state.agents.filter(item=> item.name.includes(action.payload))
    }
  },
  extraReducers(builder) {
    // @ts-ignore
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.isLoading = true
        state.error=''
        state.agents = []
        state.filteredAgents = []
      })
      .addCase(fetchAgents.fulfilled, (state, action:PayloadAction<IAgents[]>) => {
        state.isLoading = false
        state.agents = action.payload
        state.filteredAgents = action.payload
      })
      .addCase(fetchAgents.rejected, (state,action:PayloadAction<string> ) => {
        state.isLoading = false
        state.agents = []
        state.filteredAgents = []
        state.error = action.payload
      })
  }
})

export const {deleteAgent,filterAgents} = agents.actions;
export default  agents.reducer
