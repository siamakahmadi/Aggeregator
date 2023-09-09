'use server'
import { useEffect } from 'react';
import router from 'next/router';

export default function Redirect() {
  router.push('/about');  
}

