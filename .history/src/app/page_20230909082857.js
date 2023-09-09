'use client'
import { useEffect } from 'react';
import { NextRouter } from 'next/router';
import router from 'next/router';

export default function Redirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/users/all') 
  }, [])
  
}
