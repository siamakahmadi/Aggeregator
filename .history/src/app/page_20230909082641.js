'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextRouter } from 'next/router';

export default function Redirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/users/all') 
  }, [])
  
}
