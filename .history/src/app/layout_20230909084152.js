import './globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const metadata = {
  title: 'Aggeregator Admin',
  description: 'This is the aggeregator Platform Dashboard',
}

export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    router.push('/new-home');
  }, [])
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
