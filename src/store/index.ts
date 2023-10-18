import { configureStore } from '@reduxjs/toolkit'
import agents from "@/store/slices/list-slice";

export const store = configureStore({
  reducer: {
    agents
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch