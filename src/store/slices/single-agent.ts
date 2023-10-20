import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getSingleAgent} from "@/store/thunks/list-thunk";

interface AgentState {
  singleAgent: {},
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
      .addCase(getSingleAgent.pending, (state) => {
        state.singleAgent = {}
      })
      .addCase(getSingleAgent.fulfilled, (state, action:PayloadAction<AgentState>) => {
        state.singleAgent = action.payload
      })
      .addCase(getSingleAgent.rejected, (state) => {
        state.singleAgent = {}
      })

  }
})


export const  {} = singleAgent.actions
export default singleAgent.reducer