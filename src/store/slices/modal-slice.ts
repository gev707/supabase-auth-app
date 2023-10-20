import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
  isModalOpen:boolean,
  isEdited:boolean,
}

const initialState:ModalState  = {
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
})


export const  {
  setToggleModal,
  setEditedModalForm
} = modal.actions

export default modal.reducer