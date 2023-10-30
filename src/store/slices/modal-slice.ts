import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
  isModalOpen:boolean,
  isConfirmModalOpen:boolean
}

const initialState:ModalState  = {
  isModalOpen:false,
  isConfirmModalOpen:false
}

const modal = createSlice({
  name:'modal',
  initialState,
  reducers:{
      setToggleModal : (state) => {
        state.isModalOpen= !state.isModalOpen
      },
      setToggleConfirmModal: (state)=>{
          state.isConfirmModalOpen = !state.isConfirmModalOpen
      }
  },
})

export const  {
  setToggleModal,
} = modal.actions

export default modal.reducer