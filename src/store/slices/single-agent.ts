import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getSingleAgent} from "@/store/thunks/list-thunk";

interface AgentState {
  singleAgent: {}
}

const initialState:AgentState = {
  singleAgent: {},
}
const singleAgent = createSlice({
  name:'single',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(getSingleAgent.fulfilled, (state, action:PayloadAction<AgentState>) => {
        state.singleAgent = action.payload
      })

  }
})


export const  {} = singleAgent.actions
export default singleAgent.reducer