import {createSlice} from "@reduxjs/toolkit";

interface ModalState {
  isModalOpen:boolean,
}

const initialState:ModalState  = {
  isModalOpen:false,
}

const modal = createSlice({
  name:'modal',
  initialState,
  reducers:{
      setToggleModal : (state) => {
        state.isModalOpen= !state.isModalOpen
      },
  },
})


export const  {
  setToggleModal,
} = modal.actions

export default modal.reducer