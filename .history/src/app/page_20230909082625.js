'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nex

export default function Redirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/users/all') 
  }, [])
  
}
