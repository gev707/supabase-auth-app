import { configureStore,combineReducers } from '@reduxjs/toolkit'
import agents from "@/store/slices/agent-slice";
import modal from '@/store/slices/modal-slice'
import single from '@/store/slices/single-agent-slice'
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
  agents,
  modal,
  single,
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch :() => AppDispatch = useDispatch;