import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAgents, getSingleAgent} from "@/store/thunks/list-thunk";
import {IAgents} from "@/types";

interface ModalState {
  singleAgent: {}
  isModalOpen:boolean,
  isEdited:boolean,
}

const initialState:ModalState  = {
  singleAgent:{},
  isModalOpen:false,
  isEdited:false
}

const modal = createSlice({
  name:'modal',
  initialState,
  reducers:{
      setToggleModal : (state) => {
        state.isModalOpen= !state.isModalOpen
      },
      setEditedModalForm:(state) => {
        state.isEdited = !state.isEdited
      }
  },
  extraReducers(builder) {
    builder
      .addCase(getSingleAgent.fulfilled, (state, action:PayloadAction<{}>) => {
        state.singleAgent = action.payload
      })

  }
})


export const  {setToggleModal,setEditedModalForm} = modal.actions
export default modal.reducer