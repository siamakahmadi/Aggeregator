import { useEffect } from 'react';
import { useRouter } from 'next/router';
export default function Home({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.push('/home'); 
  }, []);

  return 
  return (
    <Component {...pageProps} />
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-950">
    //   <div className='text-xl text-white'>
    //     Welcome To Echo New Project
    //     <div className="flex mt-10 ">
    //       <div className="mr-10">
    //         <a className="text-cyan-500" href="/dashboard">Dashboard</a>
    //       </div>
    //       <div className="">
    //         <a className="text-cyan-500" href="/users">Index</a>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  )
}
