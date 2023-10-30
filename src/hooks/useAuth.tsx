'use client';

import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useRouter} from "next/navigation";
import {ChangeEvent, useState} from "react";
import {IUser} from "@/types";

export const useAuth = () => {
  const [user,setUser] = useState<IUser>({
    email: ''
  })
  const [isLogin,setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = createClientComponentClient();
  const router = useRouter();


  const handleEmailValueChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordValueChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }


  const handleSignUp =  async () => {
    try {
      const response = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
      return response.data
    } catch (e) {
      return e;
    } finally {
      router.refresh()
    }
  }

  const handleSignIn =  async () => {
    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      router.push('./create')
      return response.data
    } catch (e) {
      return e;
    }
  }

  const handleSignOut = async () => {
    try {
      const response = await supabase.auth.signOut();
      router.push('./')
      return response
    }catch (e) {
      return e
    }
  }

  const getUser = async () => {
    const {data:{user}} = await supabase.auth.getUser();
    if(user) {
      const {email:IUser} = user
      setUser({email})
    }
  }

  const handleChangeSignUp = () => {
    setIsLogin(prevState => !prevState)
  }

  return {
    isLogin,
    email,
    password,
    user,
    handleSignIn,
    handleSignUp,
    handleSignOut,
    getUser,
    handleChangeSignUp,
    handleEmailValueChange,
    handlePasswordValueChange
  }
}