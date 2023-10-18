'use client'
import {store} from './index';
import React, {FC} from "react";
import {Provider} from 'react-redux'

interface ChildrenProps  {
  children:React.ReactNode
}

export default function ReduxProvider({children}:ChildrenProps)  {
  return <Provider store={store}>{children}</Provider>
}
