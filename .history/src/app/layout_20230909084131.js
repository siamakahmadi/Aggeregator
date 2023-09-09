import './globals.css'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/new-home');
  }, [])

  return <div>Home</div>
}


export const metadata = {
  title: 'Aggeregator Admin',
  description: 'This is the aggeregator Platform Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
