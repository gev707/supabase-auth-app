'use client'
import {store} from './index';
import {Provider} from 'react-redux'

interface ChildrenProps  {
  children:React.ReactNode
}

export default function ReduxProvider({children}:ChildrenProps)  {
  return <Provider store={store}>{children}</Provider>
}
