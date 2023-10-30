'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useAuth} from "@/hooks/useAuth";
import {useEffect} from "react";

export default function Header() {
  const {handleSignOut,getUser,user} = useAuth()
  const router = useRouter()
  const routeHomePage = () => {
    router.push('./')
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <header className='flex justify-between items-center pl-5 pr-5 border-b-2 bg-emerald-500 h-18'>
      <h1
        className='p-3 text-fuchsia-800 text-3xl'
        onClick={routeHomePage}
      >Air</h1>
      <div className="flex justify-between items-center">
          <ul className='flex items-center text-amber-50 text-sm font-bold'>
            <li className='mr-5'>
              <Link href='/create'>
                Create
              </Link>
            </li>
            <li className='mr-5'>
              <Link href='/contacts'>
                Contacts
              </Link>
            </li>
            <li className='mr-5'>
              <Link href='/campaigns'>
                Campaigns
              </Link>
          </li>
            <li className='mr-5'>
              <Link href='/recordings'>
                Recordings
              </Link>
          </li>
          </ul>
        </div>
      <div className='flex gap-1'>
        <button
          className='text-white text-sm font-bold shadow p-1 rounded'
          onClick={handleSignOut}
        >Sign Out</button>
        <h2>{user?.email}</h2>
      </div>
    </header>
  )
}