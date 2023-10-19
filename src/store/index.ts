import { configureStore,combineReducers } from '@reduxjs/toolkit'
import agents from "@/store/slices/list-slice";
import modal from '@/store/slices/modal-slice'
import {useDispatch} from "react-redux";


const rootReduser = combineReducers({
  agents,
  modal
})

export const store = configureStore({
  reducer: rootReduser
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch :() => AppDispatch = useDispatch;