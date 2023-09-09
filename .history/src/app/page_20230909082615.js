'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
impoer useRouter from '.'

export default function Redirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/users/all') 
  }, [])
  
}
