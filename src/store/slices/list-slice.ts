import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {fetchAgentsList} from "@/store/thunks/list-thunk";

const initialState:AgentType = [{
  name:'',
  type:'',
  edited:''
}]

export type AgentType = [{
  id?:string | number,
  name:string,
  type:string,
  edited:string
}]

export const agents = createSlice({
  name: 'agents',
  initialState,

  reducers:{
   deleteCurrentListItem:(state,action:PayloadAction<number | string>)=> {
     state.filter(item=> item.id !== action.payload)
   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgentsList.pending, (state, action) => {
      })
      .addCase(fetchAgentsList.fulfilled, (state, action:PayloadAction<AgentType| any>) => {
        state.push(action.payload)
      })
      .addCase(fetchAgentsList.rejected, (state, action) => {
      })
  },
})

export const {deleteCurrentListItem} = agents.actions;
export default  agents.reducer
