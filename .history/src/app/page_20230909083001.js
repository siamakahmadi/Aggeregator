
import { useEffect } from 'react';
// import { NextRouter } from 'next/router';
import router from 'next/router';

export default function Redirect() {
  router.push('/about');

  // useEffect(() => {
  //   router.push('/users/all') 
  // }, [])
  
}

import router from 'next/router';

router.push('/about');
