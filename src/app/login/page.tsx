'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Database } from '@/app/auth/lib/database.types'
import Input from "@/UI/Input";
import Button from "@/UI/Button";

export default function Login() {
  const [isLogin,setIsLogin] = useState<boolean>(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.push('./create')
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.push('./create')
  }

  const handleChangeSignUp = () => {
    setIsLogin(prevState => !prevState)
  }

  return (
    <>
        <form className='w-72 mx-auto my-32 shadow-xl p-3 grid text-center rounded'>
        <label className='text-3xl text-grey-900 py-1'>{isLogin ?  'Sign Up': 'Login'}</label>
          <Input
            type='text'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoComplate='off'
            className='my-2 rounded p-1.5 text-sm bg-gray-100'
          />
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
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