'use client'

import Input from "@/UI/Input";
import Button from "@/UI/Button";
import {useAuth} from "@/hooks/useAuth";

export default function Login() {

  const {
    isLogin,
    email,
    password,
    handleChangeSignUp,
    handleSignUp,
    handleSignIn,
    handleEmailValueChange,
    handlePasswordValueChange
  } = useAuth()

  return (
    <>
        <form
          className='w-72 mx-auto my-32 shadow-xl p-3 grid text-center rounded'
          onSubmit={(e)=>e.preventDefault()}
        >
        <label className='text-3xl text-grey-900 py-1'>{isLogin ?  'Sign Up': 'Login'}</label>
          <Input
            type='text'
            value={email}
            name='email'
            onChange={(e)=>handleEmailValueChange(e)}
            autoComplate='off'
            className='my-2 rounded p-1.5 text-sm bg-gray-100'
          />
          <Input
            type="password"
            name="password"
            onChange={(e)=>handlePasswordValueChange(e)}
            value={password}
            autoComplate='off'
            className=' rounded p-1.5 text-sm bg-gray-100 mb-5'
          />
          {
            isLogin
              ? <Button
                onClick={handleSignUp}
                text='Sign Up'
                type='button'
                className='bg-blue-400 hover:bg-blue-500 text-white rounded text-sm py-1 px-2 my-2 w-1/2 mx-auto'
                />
              : <Button
                onClick={handleSignIn}
                text='Login'
                type='button'
                className='bg-blue-400 hover:bg-blue-700 text-white rounded text-sm py-1 px-2 w-1/2 mx-auto'
          />}
          <p className='text-center text-sm my-4'>
            { !isLogin
              ?`Don't have an account?`
              : `Already have an account?`
            }
            <span
              className='text-blue-600 cursor-pointer'
              onClick={handleChangeSignUp}
            >{!isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </form>
      </>
  )
}