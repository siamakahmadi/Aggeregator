'use client'
import { useEffect } from 'react';
import { NextRouter } from 'next/router';

export default function Redirect() {
  const router = NextRouter();
  
  useEffect(() => {
    router.push('/users/all') 
  }, [])
  
}
