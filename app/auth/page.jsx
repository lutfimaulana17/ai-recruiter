"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient'

const Login = () => {

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: "google"
    })
    if (error) {
        console.error('error: ', error)
    }
}

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center border rounded-2xl p-8'>
        <Image src="/logo.png" width={400} height={100} alt="Logo" className='w-[180px]' />
        <div className='flex items-center flex-col'>
            <Image src="/login.png" width={600} height={400} className='w-[400px] h-[250px]  rounded-2xl' alt="Login" />
            <h2 className='text-2xl font-bold text-center mt-5'>Welcome to AiCruiter</h2>
            <p className='text-gray-500 text-center'>Sign In With Google Authentication</p>
            <Button 
              className='mt-7 w-full'
              onClick={signIn}
            >
              Login with Google  
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Login;